import { expect, test } from '@playwright/test';

const locales = ['en', 'ja', 'de', 'es'];
const paths = ['/home', '/classes', '/classes/colonial-marine'];

test('root routes redirect to the English homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/en\/home$/);
  await page.goto('/home');
  await expect(page).toHaveURL(/\/en\/home$/);
});

test('all required localized routes render successfully', async ({ page }) => {
  for (const locale of locales) {
    for (const path of paths) {
      const response = await page.goto(`/${locale}${path}`);
      expect(response?.status(), `${locale}${path}`).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
    }
  }
});

test('required pages contain no broken internal links', async ({ page, request }) => {
  for (const path of paths) {
    await page.goto(`/en${path}`);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) =>
      [...new Set(links.map((link) => (link as HTMLAnchorElement).getAttribute('href')).filter(Boolean))] as string[],
    );

    for (const href of hrefs) {
      const url = new URL(href, 'http://127.0.0.1:3010');
      url.hash = '';
      const response = await request.get(url.toString());
      expect(response.status(), `${path} -> ${href}`).toBeLessThan(400);
    }
  }
});

test('mobile navigation opens and reaches the classes page', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chrome', 'Mobile-only interaction');
  await page.goto('/en/home');
  await page.getByRole('button', { name: 'Menu' }).click();
  const classesLink = page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Classes' });
  await expect(classesLink).toBeVisible();
  await classesLink.click();
  await expect(page).toHaveURL(/\/en\/classes$/);
});

test('captures delivery screenshots', async ({ page }, testInfo) => {
  await page.goto('/en/home');
  await page.screenshot({ path: `test-results/${testInfo.project.name}-home.png`, fullPage: true });
  await page.goto('/en/classes');
  await page.screenshot({ path: `test-results/${testInfo.project.name}-classes.png`, fullPage: true });
  await page.goto('/en/classes/colonial-marine');
  await page.screenshot({ path: `test-results/${testInfo.project.name}-article.png`, fullPage: true });
});
