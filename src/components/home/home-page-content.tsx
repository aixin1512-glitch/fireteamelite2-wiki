import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { AboutGame } from './about-game';
import { CommunityCta } from './community-cta';
import { FeatureGrid } from './feature-grid';
import { FeaturedGuide } from './featured-guide';
import { Hero } from './hero';
import { MediaBand } from './media-band';
import { StartHere } from './start-here';

export function HomePageContent({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <>
      <Hero locale={locale} copy={dictionary.home.hero} />
      <StartHere locale={locale} copy={dictionary.home.start} />
      <FeaturedGuide locale={locale} copy={dictionary.home.featured} />
      <AboutGame locale={locale} copy={dictionary.home.about} />
      <FeatureGrid features={dictionary.home.features} />
      <MediaBand copy={dictionary.home.media} />
      <CommunityCta locale={locale} copy={dictionary.home.community} />
    </>
  );
}
