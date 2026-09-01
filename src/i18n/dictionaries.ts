import type { Locale } from './config';

export type Dictionary = {
  site: {
    name: string;
    shortName: string;
    unofficial: string;
    skip: string;
  };
  nav: {
    home: string;
    classes: string;
    beginner: string;
    weapons: string;
    guides: string;
    menu: string;
  };
  home: {
    hero: {
      eyebrow: string;
      titleTop: string;
      titleBottom: string;
      description: string;
      primary: string;
      secondary: string;
      video: string;
      status: string;
      platforms: string;
      stats: string[];
    };
    start: {
      eyebrow: string;
      title: string;
      description: string;
      cards: Array<{ number: string; title: string; description: string; href: string; tag: string }>;
    };
    featured: {
      eyebrow: string;
      title: string;
      description: string;
      includes: string;
      bullets: string[];
      cta: string;
    };
    about: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      cta: string;
      stats: Array<{ label: string; value: string }>;
    };
    features: Array<{ number: string; title: string; description: string }>;
    media: { eyebrow: string; title: string; description: string; trailer: string };
    community: { eyebrow: string; title: string; description: string; primary: string; secondary: string };
  };
  classes: {
    eyebrow: string;
    title: string;
    description: string;
    filters: { all: string; assault: string; support: string; control: string };
    cards: Array<{
      slug: string;
      name: string;
      role: string;
      type: 'assault' | 'support' | 'control';
      status: string;
      description: string;
      traits: string[];
    }>;
    compareTitle: string;
    compareDescription: string;
    beginnerTitle: string;
    beginnerDescription: string;
    readGuide: string;
  };
  article: {
    back: string;
    contents: string;
    updated: string;
    readTime: string;
    difficulty: string;
    role: string;
    related: string;
    relatedDescription: string;
    beginnerGuide: string;
    classesIndex: string;
  };
  footer: {
    about: string;
    explore: string;
    official: string;
    disclaimer: string;
    game: string;
    steam: string;
    playstation: string;
    xbox: string;
    youtube: string;
  };
};

const en: Dictionary = {
  site: {
    name: 'Aliens: Fireteam Elite 2 Wiki',
    shortName: 'AFE2 Wiki',
    unofficial: 'Unofficial Field Intelligence',
    skip: 'Skip to content',
  },
  nav: { home: 'Home', classes: 'Classes', beginner: 'Beginner Guide', weapons: 'Weapons', guides: 'Field Guides', menu: 'Menu' },
  home: {
    hero: {
      eyebrow: 'Unofficial Fan-Made Community Wiki',
      titleTop: 'ALIENS',
      titleBottom: 'FIRETEAM ELITE II',
      description: 'Build a four-Marine fireteam, master specialized combat roles, and survive smarter Xenomorph swarms. Our field-tested guides turn every deployment into a cleaner extraction.',
      primary: 'Start Beginner Guide',
      secondary: 'Explore Classes',
      video: 'Watch Official Trailer',
      status: 'Available Now',
      platforms: 'PC · PS5 · XBOX SERIES X|S',
      stats: ['4-Player Co-op', '6 Classes', 'Cross-Platform', '2026 Release'],
    },
    start: {
      eyebrow: 'Start Here',
      title: 'Prepare for Deployment',
      description: 'Choose a route into the wiki and get mission-ready without digging through scattered intel.',
      cards: [
        { number: '01', title: 'Beginner Guide', description: 'Core movement, team roles, difficulty choices, and the first upgrades that matter.', href: '/classes/colonial-marine#overview', tag: 'First deployment' },
        { number: '02', title: 'Classes', description: 'Compare all combat roles and find the kit that fits your squad.', href: '/classes', tag: 'Build a fireteam' },
        { number: '03', title: 'Weapons', description: 'Learn weapon families, traits, augments, and reliable early loadouts.', href: '/classes/colonial-marine#loadout', tag: 'Tune your arsenal' },
        { number: '04', title: 'Combat Tactics', description: 'Control choke points, read swarm pressure, and protect squad resources.', href: '/classes/colonial-marine#combat-loop', tag: 'Survive the hive' },
      ],
    },
    featured: {
      eyebrow: 'Featured Field Manual',
      title: 'Colonial Marine Starter Build',
      description: 'A dependable front-line setup for new squads. Learn where to stand, when to spend abilities, and how to keep a firing lane from collapsing.',
      includes: 'This guide includes',
      bullets: ['Early weapon priorities', 'Ability rotation', 'Positioning rules', 'Four-player squad tips'],
      cta: 'Open Class Guide',
    },
    about: {
      eyebrow: 'Mission Briefing',
      title: 'What is Aliens: Fireteam Elite 2?',
      paragraphs: [
        'Aliens: Fireteam Elite 2 is a cooperative third-person survival shooter that deploys up to four Colonial Marines into the most hostile corners of the Aliens universe.',
        'Deeper squad mechanics, smarter enemies, specialized classes, and extensive weapon customization turn every corridor into a tactical decision. This wiki focuses on clear builds and repeatable tactics for every stage of progression.',
      ],
      cta: 'Explore All Guides',
      stats: [
        { label: 'Developer', value: 'Cold Iron Studios' },
        { label: 'Squad Size', value: 'Up to 4' },
        { label: 'Core Classes', value: '5 + Specialist' },
        { label: 'Platforms', value: 'PC · PS5 · Xbox' },
      ],
    },
    features: [
      { number: '01', title: 'A Bigger Co-Op Bug Hunt', description: 'Coordinate four-player tactics, overlapping fields of fire, and cross-platform voice chat.' },
      { number: '02', title: 'More Classes, More Builds', description: 'Master five upgraded classes and shape the Specialist into a custom endgame Marine.' },
      { number: '03', title: 'Deadlier Threats', description: 'Adapt to aggressive enemies that pressure flanks, resources, and squad positioning.' },
      { number: '04', title: 'Deep Weapon Customization', description: 'Combine fire modes, Augments, and Weapon Traits around a deliberate combat role.' },
    ],
    media: { eyebrow: 'Combat Recordings', title: 'Videos & Screenshots', description: 'Study official footage, environments, and squad formations before your next deployment.', trailer: 'Play Official Trailer' },
    community: { eyebrow: 'Stay Connected', title: 'No Marine Deploys Alone', description: 'Use the wiki as your field manual, then join the official community for squadmates and fresh mission intel.', primary: 'Browse Field Guides', secondary: 'Official Discord' },
  },
  classes: {
    eyebrow: 'Combat Roles',
    title: 'Class Field Guides',
    description: 'Every class controls the swarm differently. Compare team functions, signature tools, and learning curves before locking your loadout.',
    filters: { all: 'All classes', assault: 'Assault', support: 'Support', control: 'Control' },
    cards: [
      { slug: 'colonial-marine', name: 'Colonial Marine', role: 'Front-line rifle specialist', type: 'assault', status: 'Full guide', description: 'Reliable damage, clear firing lanes, and a straightforward combat loop for learning squad fundamentals.', traits: ['Rifle focus', 'Sustained fire', 'Beginner friendly'] },
      { slug: 'gunner', name: 'Gunner', role: 'Burst damage specialist', type: 'assault', status: 'Overview', description: 'Turns coordinated damage windows into fast elite kills and clean wave transitions.', traits: ['Burst damage', 'Overclock', 'Team tempo'] },
      { slug: 'technician', name: 'Technician', role: 'Area control specialist', type: 'control', status: 'Overview', description: 'Uses deployables and control tools to reshape approaches and hold dangerous angles.', traits: ['Turret', 'Crowd control', 'Choke points'] },
      { slug: 'doc', name: 'Doc', role: 'Combat support specialist', type: 'support', status: 'Overview', description: 'Stabilizes the squad, manages attrition, and keeps the team effective during long missions.', traits: ['Recovery', 'Buffs', 'Squad sustain'] },
      { slug: 'recon', name: 'Recon', role: 'Intel and ammunition support', type: 'support', status: 'Overview', description: 'Reveals threats, improves target focus, and protects the fireteam from resource collapse.', traits: ['Intel', 'Ammo support', 'Target marking'] },
      { slug: 'specialist', name: 'Specialist', role: 'Custom endgame Marine', type: 'control', status: 'Overview', description: 'A flexible late-game class built around chosen tools, traits, and team needs.', traits: ['Custom kit', 'Endgame', 'Flexible role'] },
    ],
    compareTitle: 'Choose by team need, not damage alone',
    compareDescription: 'A balanced squad needs swarm control, elite damage, and resource stability. Use the role labels to cover the gaps in your fireteam.',
    beginnerTitle: 'New to the fireteam?',
    beginnerDescription: 'Start with Colonial Marine to learn spacing, target priority, and the rhythm of ability usage without a complex setup.',
    readGuide: 'Read guide',
  },
  article: { back: 'Classes', contents: 'On this page', updated: 'Updated', readTime: '8 min read', difficulty: 'Difficulty', role: 'Role', related: 'Continue your briefing', relatedDescription: 'Build the rest of your field knowledge before the next mission.', beginnerGuide: 'Beginner Guide', classesIndex: 'All Classes' },
  footer: {
    about: 'An independent fan-made field guide covering classes, builds, weapons, and co-op tactics for Aliens: Fireteam Elite 2. Not affiliated with Cold Iron Studios or 20th Century Studios.',
    explore: 'Explore', official: 'Official Links', disclaimer: 'Game names, images, and trademarks belong to their respective owners.', game: 'Official Game Site', steam: 'Steam', playstation: 'PlayStation', xbox: 'Xbox', youtube: 'Official Trailer',
  },
};

const ja: Dictionary = {
  ...en,
  site: { name: 'エイリアン：ファイアーチーム エリート2 Wiki', shortName: 'AFE2 Wiki', unofficial: '非公式フィールド情報', skip: 'コンテンツへ移動' },
  nav: { home: 'ホーム', classes: 'クラス', beginner: '初心者ガイド', weapons: '武器', guides: '攻略ガイド', menu: 'メニュー' },
  home: {
    hero: { ...en.home.hero, eyebrow: '非公式ファンコミュニティWiki', description: '4人の海兵隊ファイアチームを編成し、各戦闘ロールを使いこなし、進化したゼノモーフの群れを生き延びよう。実戦的な攻略で、すべての作戦を確実な脱出へ導きます。', primary: '初心者ガイドを読む', secondary: 'クラスを見る', video: '公式トレーラーを見る', status: '発売中', platforms: 'PC · PS5 · XBOX SERIES X|S', stats: ['4人協力プレイ', '6クラス', 'クロスプラットフォーム', '2026年発売'] },
    start: { eyebrow: 'ここから開始', title: '出撃準備', description: '散らばった情報を探さず、目的に合う攻略ルートから作戦準備を始めましょう。', cards: [
      { number: '01', title: '初心者ガイド', description: '移動、チームロール、難易度、序盤で重要な強化を解説。', href: '/classes/colonial-marine#overview', tag: '初出撃' },
      { number: '02', title: 'クラス', description: '戦闘ロールを比較し、分隊に合うキットを選択。', href: '/classes', tag: '部隊編成' },
      { number: '03', title: '武器', description: '武器種、特性、オーグメント、安定した序盤装備を学ぶ。', href: '/classes/colonial-marine#loadout', tag: '武装調整' },
      { number: '04', title: '戦闘戦術', description: 'チョークポイントを制御し、群れの圧力から物資を守る。', href: '/classes/colonial-marine#combat-loop', tag: '巣を生き延びる' },
    ] },
    featured: { ...en.home.featured, eyebrow: '注目のフィールドマニュアル', title: 'コロニアルマリーン序盤ビルド', description: '新規分隊向けの安定した前衛構成。立ち位置、アビリティの使用タイミング、射線を維持する方法を解説します。', includes: 'ガイド内容', bullets: ['序盤の武器優先度', 'アビリティ回し', 'ポジショニング', '4人分隊のヒント'], cta: 'クラスガイドを開く' },
    about: { ...en.home.about, eyebrow: 'ミッションブリーフィング', title: 'エイリアン：ファイアーチーム エリート2とは？', paragraphs: ['最大4人のコロニアルマリーンが「エイリアン」世界の危険地帯へ投入される、協力型サードパーソンサバイバルシューターです。', '深化した分隊システム、賢くなった敵、特化クラス、幅広い武器カスタマイズにより、すべての通路が戦術判断の場になります。'], cta: 'すべてのガイドを見る', stats: [{ label: '開発', value: 'Cold Iron Studios' }, { label: '分隊人数', value: '最大4人' }, { label: '基本クラス', value: '5 + Specialist' }, { label: '対応機種', value: 'PC · PS5 · Xbox' }] },
    features: [
      { number: '01', title: 'より大規模な協力戦', description: '4人の戦術、交差射撃、クロスプラットフォーム音声を活用。' },
      { number: '02', title: '多彩なクラスとビルド', description: '5つの強化クラスと自由なスペシャリストを習得。' },
      { number: '03', title: 'さらに危険な脅威', description: '側面、物資、陣形を崩す攻撃的な敵に対応。' },
      { number: '04', title: '奥深い武器改造', description: '射撃モード、オーグメント、武器特性を役割に合わせて構成。' },
    ],
    media: { eyebrow: '戦闘記録', title: '動画 & スクリーンショット', description: '次の出撃前に公式映像、環境、部隊陣形を確認。', trailer: '公式トレーラーを再生' },
    community: { eyebrow: 'コミュニティ', title: '海兵隊は一人で戦わない', description: 'Wikiをフィールドマニュアルとして活用し、公式コミュニティで仲間と最新情報を見つけましょう。', primary: '攻略ガイドを見る', secondary: '公式Discord' },
  },
  classes: { ...en.classes, eyebrow: '戦闘ロール', title: 'クラス攻略ガイド', description: 'クラスごとに群れの制御方法は異なります。装備を決める前に役割、固有ツール、習得難度を比較しましょう。', filters: { all: '全クラス', assault: '攻撃', support: '支援', control: '制御' }, cards: [
    { slug: 'colonial-marine', name: 'Colonial Marine', role: '前線ライフルスペシャリスト', type: 'assault', status: '完全ガイド', description: '安定した火力と明確な射線を持ち、分隊戦の基礎を学びやすいクラスです。', traits: ['ライフル重視', '継続火力', '初心者向け'] },
    { slug: 'gunner', name: 'Gunner', role: '瞬間火力スペシャリスト', type: 'assault', status: '概要', description: '連携した火力時間で強敵を素早く倒し、ウェーブの流れを整えます。', traits: ['瞬間火力', 'Overclock', '攻撃テンポ'] },
    { slug: 'technician', name: 'Technician', role: 'エリア制御スペシャリスト', type: 'control', status: '概要', description: '設置物と制御ツールで敵の進路を変え、危険な角度を守ります。', traits: ['タレット', '群れ制御', '狭路防衛'] },
    { slug: 'doc', name: 'Doc', role: '戦闘支援スペシャリスト', type: 'support', status: '概要', description: '分隊を安定させ、消耗を管理し、長いミッションで戦力を維持します。', traits: ['回復', '強化', '分隊維持'] },
    { slug: 'recon', name: 'Recon', role: '索敵・弾薬支援', type: 'support', status: '概要', description: '脅威を発見し、集中攻撃を助け、物資不足から分隊を守ります。', traits: ['索敵', '弾薬支援', '標的マーキング'] },
    { slug: 'specialist', name: 'Specialist', role: 'カスタム終盤クラス', type: 'control', status: '概要', description: '選択したツールと特性で、分隊の不足を補う柔軟な終盤クラスです。', traits: ['自由構成', 'エンドゲーム', '柔軟な役割'] },
  ], compareTitle: '火力だけでなく分隊の需要で選ぶ', compareDescription: '安定した分隊には群れの制御、強敵への火力、物資維持が必要です。', beginnerTitle: '初めての出撃ですか？', beginnerDescription: 'コロニアルマリーンで間合い、標的優先度、アビリティのリズムを学びましょう。', readGuide: 'ガイドを読む' },
  article: { back: 'クラス', contents: 'このページ', updated: '更新', readTime: '読了8分', difficulty: '難易度', role: '役割', related: '次のブリーフィング', relatedDescription: '次の作戦前に必要なフィールド知識をそろえましょう。', beginnerGuide: '初心者ガイド', classesIndex: '全クラス' },
  footer: { ...en.footer, about: 'エイリアン：ファイアーチーム エリート2のクラス、ビルド、武器、協力戦術を扱う独立した非公式攻略Wikiです。Cold Iron Studiosおよび20th Century Studiosとは関係ありません。', explore: '攻略', official: '公式リンク', disclaimer: 'ゲーム名、画像、商標の権利は各権利者に帰属します。', game: '公式ゲームサイト', youtube: '公式トレーラー' },
};

const de: Dictionary = {
  ...en,
  site: { name: 'Aliens: Fireteam Elite 2 Wiki', shortName: 'AFE2 Wiki', unofficial: 'Inoffizielle Feldeinsätze', skip: 'Zum Inhalt springen' },
  nav: { home: 'Start', classes: 'Klassen', beginner: 'Einsteiger-Guide', weapons: 'Waffen', guides: 'Einsatzguides', menu: 'Menü' },
  home: {
    hero: { ...en.home.hero, eyebrow: 'Inoffizielles Community-Wiki', description: 'Stelle ein Fireteam aus vier Marines zusammen, meistere spezialisierte Rollen und überlebe intelligentere Xenomorph-Schwärme. Unsere praxiserprobten Guides machen jeden Einsatz planbarer.', primary: 'Einsteiger-Guide', secondary: 'Klassen ansehen', video: 'Offiziellen Trailer ansehen', status: 'Jetzt erhältlich', stats: ['4-Spieler-Koop', '6 Klassen', 'Cross-Platform', 'Release 2026'] },
    start: { eyebrow: 'Hier starten', title: 'Bereit für den Einsatz', description: 'Wähle deinen Einstieg ins Wiki und finde wichtige Informationen ohne Umwege.', cards: [
      { number: '01', title: 'Einsteiger-Guide', description: 'Bewegung, Teamrollen, Schwierigkeitsgrade und wichtige erste Upgrades.', href: '/classes/colonial-marine#overview', tag: 'Erster Einsatz' },
      { number: '02', title: 'Klassen', description: 'Vergleiche Rollen und finde das passende Kit für dein Team.', href: '/classes', tag: 'Fireteam bauen' },
      { number: '03', title: 'Waffen', description: 'Waffenfamilien, Traits, Augments und sichere frühe Loadouts.', href: '/classes/colonial-marine#loadout', tag: 'Arsenal abstimmen' },
      { number: '04', title: 'Kampftaktik', description: 'Kontrolliere Engstellen und schütze die Ressourcen des Teams.', href: '/classes/colonial-marine#combat-loop', tag: 'Den Hive überleben' },
    ] },
    featured: { ...en.home.featured, eyebrow: 'Empfohlenes Feldhandbuch', title: 'Colonial-Marine-Starter-Build', description: 'Ein zuverlässiges Frontlinien-Setup für neue Teams: Positionierung, Fähigkeitentiming und stabile Feuerkorridore.', includes: 'Enthalten', bullets: ['Frühe Waffenprioritäten', 'Fähigkeitenrotation', 'Positionsregeln', 'Tipps für vier Spieler'], cta: 'Klassenguide öffnen' },
    about: { ...en.home.about, eyebrow: 'Einsatzbesprechung', title: 'Was ist Aliens: Fireteam Elite 2?', paragraphs: ['Ein kooperativer Third-Person-Survival-Shooter, der bis zu vier Colonial Marines in die gefährlichsten Winkel des Aliens-Universums schickt.', 'Tiefere Teammechaniken, klügere Gegner, spezialisierte Klassen und umfangreiche Waffenanpassung machen jeden Korridor zu einer taktischen Entscheidung.'], cta: 'Alle Guides ansehen', stats: [{ label: 'Entwickler', value: 'Cold Iron Studios' }, { label: 'Teamgröße', value: 'Bis zu 4' }, { label: 'Kernklassen', value: '5 + Specialist' }, { label: 'Plattformen', value: 'PC · PS5 · Xbox' }] },
    features: [
      { number: '01', title: 'Die größere Koop-Jagd', description: 'Koordiniere Vierer-Taktiken, Feuerfelder und plattformübergreifenden Voice-Chat.' },
      { number: '02', title: 'Mehr Klassen, mehr Builds', description: 'Meistere fünf verbesserte Klassen und den frei anpassbaren Specialist.' },
      { number: '03', title: 'Tödlichere Bedrohungen', description: 'Reagiere auf aggressive Feinde, die Flanken, Vorräte und Formation angreifen.' },
      { number: '04', title: 'Tiefe Waffenanpassung', description: 'Kombiniere Feuermodi, Augments und Weapon Traits passend zur Rolle.' },
    ],
    media: { eyebrow: 'Kampfaufzeichnungen', title: 'Videos & Screenshots', description: 'Studiere offizielle Aufnahmen, Umgebungen und Formationen vor dem nächsten Einsatz.', trailer: 'Offiziellen Trailer abspielen' },
    community: { eyebrow: 'In Verbindung bleiben', title: 'Kein Marine kämpft allein', description: 'Nutze das Wiki als Feldhandbuch und finde im offiziellen Discord Mitspieler und neue Einsatzinfos.', primary: 'Einsatzguides ansehen', secondary: 'Offizieller Discord' },
  },
  classes: { ...en.classes, eyebrow: 'Kampfrollen', title: 'Klassen-Feldguides', description: 'Jede Klasse kontrolliert den Schwarm anders. Vergleiche Teamfunktion, Werkzeuge und Lernkurve vor dem Loadout.', filters: { all: 'Alle Klassen', assault: 'Angriff', support: 'Unterstützung', control: 'Kontrolle' }, cards: [
    { slug: 'colonial-marine', name: 'Colonial Marine', role: 'Frontlinien-Rifle-Spezialist', type: 'assault', status: 'Vollständiger Guide', description: 'Verlässlicher Schaden, freie Feuerlinien und ein klarer Kampfablauf zum Lernen der Teamgrundlagen.', traits: ['Gewehrfokus', 'Dauerfeuer', 'Einsteigerfreundlich'] },
    { slug: 'gunner', name: 'Gunner', role: 'Burst-Schadensspezialist', type: 'assault', status: 'Überblick', description: 'Verwandelt koordinierte Schadensfenster in schnelle Elite-Kills und saubere Wellenwechsel.', traits: ['Burst-Schaden', 'Overclock', 'Teamtempo'] },
    { slug: 'technician', name: 'Technician', role: 'Gebietskontroll-Spezialist', type: 'control', status: 'Überblick', description: 'Formt mit Deployables und Kontrolle die Gegnerwege und hält gefährliche Winkel.', traits: ['Turret', 'Schwarmkontrolle', 'Engstellen'] },
    { slug: 'doc', name: 'Doc', role: 'Kampfunterstützung', type: 'support', status: 'Überblick', description: 'Stabilisiert das Team, verwaltet Verschleiß und hält es in langen Missionen einsatzbereit.', traits: ['Heilung', 'Buffs', 'Teamstabilität'] },
    { slug: 'recon', name: 'Recon', role: 'Aufklärung und Munition', type: 'support', status: 'Überblick', description: 'Deckt Gefahren auf, verbessert den Zielfokus und verhindert Ressourcenknappheit.', traits: ['Aufklärung', 'Munition', 'Zielmarkierung'] },
    { slug: 'specialist', name: 'Specialist', role: 'Anpassbarer Endgame-Marine', type: 'control', status: 'Überblick', description: 'Eine flexible Endgame-Klasse aus gewählten Werkzeugen, Traits und Teambedarf.', traits: ['Freies Kit', 'Endgame', 'Flexible Rolle'] },
  ], compareTitle: 'Nach Teambedarf wählen, nicht nur nach Schaden', compareDescription: 'Ein ausgeglichenes Team braucht Schwarmkontrolle, Eliteschaden und stabile Ressourcen.', beginnerTitle: 'Neu im Fireteam?', beginnerDescription: 'Beginne mit dem Colonial Marine und lerne Abstand, Zielpriorität und Fähigkeitentiming.', readGuide: 'Guide lesen' },
  article: { back: 'Klassen', contents: 'Auf dieser Seite', updated: 'Aktualisiert', readTime: '8 Min. Lesezeit', difficulty: 'Schwierigkeit', role: 'Rolle', related: 'Briefing fortsetzen', relatedDescription: 'Erweitere dein Feldwissen vor dem nächsten Einsatz.', beginnerGuide: 'Einsteiger-Guide', classesIndex: 'Alle Klassen' },
  footer: { ...en.footer, about: 'Ein unabhängiges Fan-Wiki zu Klassen, Builds, Waffen und Koop-Taktiken für Aliens: Fireteam Elite 2. Keine Verbindung zu Cold Iron Studios oder 20th Century Studios.', explore: 'Entdecken', official: 'Offizielle Links', disclaimer: 'Spielnamen, Bilder und Marken gehören den jeweiligen Rechteinhabern.', game: 'Offizielle Spielseite', youtube: 'Offizieller Trailer' },
};

const es: Dictionary = {
  ...en,
  site: { name: 'Aliens: Fireteam Elite 2 Wiki', shortName: 'AFE2 Wiki', unofficial: 'Inteligencia de campo no oficial', skip: 'Saltar al contenido' },
  nav: { home: 'Inicio', classes: 'Clases', beginner: 'Guía para principiantes', weapons: 'Armas', guides: 'Guías de campo', menu: 'Menú' },
  home: {
    hero: { ...en.home.hero, eyebrow: 'Wiki comunitaria no oficial', description: 'Forma un equipo de cuatro marines, domina roles de combate especializados y sobrevive a enjambres de xenomorfos más inteligentes. Nuestras guías convierten cada despliegue en una extracción más segura.', primary: 'Guía para principiantes', secondary: 'Explorar clases', video: 'Ver tráiler oficial', status: 'Ya disponible', stats: ['Cooperativo para 4', '6 clases', 'Multiplataforma', 'Lanzamiento 2026'] },
    start: { eyebrow: 'Empieza aquí', title: 'Prepárate para el despliegue', description: 'Elige una ruta en la wiki y prepárate para la misión sin buscar entre información dispersa.', cards: [
      { number: '01', title: 'Guía para principiantes', description: 'Movimiento, roles, dificultad y las primeras mejoras importantes.', href: '/classes/colonial-marine#overview', tag: 'Primer despliegue' },
      { number: '02', title: 'Clases', description: 'Compara roles y encuentra el equipo adecuado para tu escuadrón.', href: '/classes', tag: 'Forma tu equipo' },
      { number: '03', title: 'Armas', description: 'Familias de armas, rasgos, aumentos y configuraciones iniciales.', href: '/classes/colonial-marine#loadout', tag: 'Ajusta tu arsenal' },
      { number: '04', title: 'Tácticas de combate', description: 'Controla embudos, interpreta la presión y protege los recursos.', href: '/classes/colonial-marine#combat-loop', tag: 'Sobrevive a la colmena' },
    ] },
    featured: { ...en.home.featured, eyebrow: 'Manual de campo destacado', title: 'Configuración inicial del Marine Colonial', description: 'Una configuración de primera línea fiable para escuadrones nuevos: posición, uso de habilidades y control de líneas de tiro.', includes: 'Esta guía incluye', bullets: ['Prioridades de armas', 'Rotación de habilidades', 'Reglas de posición', 'Consejos para cuatro jugadores'], cta: 'Abrir guía de clase' },
    about: { ...en.home.about, eyebrow: 'Informe de misión', title: '¿Qué es Aliens: Fireteam Elite 2?', paragraphs: ['Un shooter cooperativo de supervivencia en tercera persona que despliega hasta cuatro Marines Coloniales en los rincones más hostiles del universo Aliens.', 'Mecánicas de equipo más profundas, enemigos más listos, clases especializadas y una amplia personalización de armas convierten cada pasillo en una decisión táctica.'], cta: 'Explorar todas las guías', stats: [{ label: 'Desarrollador', value: 'Cold Iron Studios' }, { label: 'Tamaño del equipo', value: 'Hasta 4' }, { label: 'Clases principales', value: '5 + Specialist' }, { label: 'Plataformas', value: 'PC · PS5 · Xbox' }] },
    features: [
      { number: '01', title: 'Una cacería cooperativa mayor', description: 'Coordina tácticas para cuatro, campos de tiro y chat de voz multiplataforma.' },
      { number: '02', title: 'Más clases, más configuraciones', description: 'Domina cinco clases mejoradas y personaliza al Specialist de final de juego.' },
      { number: '03', title: 'Amenazas más letales', description: 'Adáptate a enemigos agresivos que presionan flancos, recursos y posiciones.' },
      { number: '04', title: 'Personalización profunda de armas', description: 'Combina modos de disparo, aumentos y rasgos según tu función.' },
    ],
    media: { eyebrow: 'Grabaciones de combate', title: 'Vídeos y capturas', description: 'Estudia material oficial, entornos y formaciones antes del siguiente despliegue.', trailer: 'Reproducir tráiler oficial' },
    community: { eyebrow: 'Mantente conectado', title: 'Ningún marine despliega solo', description: 'Usa la wiki como manual de campo y únete a la comunidad oficial para encontrar escuadrón e información.', primary: 'Ver guías de campo', secondary: 'Discord oficial' },
  },
  classes: { ...en.classes, eyebrow: 'Roles de combate', title: 'Guías de clases', description: 'Cada clase controla el enjambre de forma distinta. Compara funciones, herramientas y dificultad antes de elegir.', filters: { all: 'Todas las clases', assault: 'Asalto', support: 'Apoyo', control: 'Control' }, cards: [
    { slug: 'colonial-marine', name: 'Marine Colonial', role: 'Especialista de rifle en primera línea', type: 'assault', status: 'Guía completa', description: 'Daño fiable, líneas de tiro claras y un ciclo sencillo para aprender los fundamentos del equipo.', traits: ['Rifle', 'Fuego sostenido', 'Fácil de aprender'] },
    { slug: 'gunner', name: 'Gunner', role: 'Especialista en daño de ráfaga', type: 'assault', status: 'Resumen', description: 'Convierte ventanas de daño coordinadas en bajas rápidas de élites y transiciones limpias.', traits: ['Ráfaga', 'Overclock', 'Ritmo del equipo'] },
    { slug: 'technician', name: 'Technician', role: 'Especialista en control de zona', type: 'control', status: 'Resumen', description: 'Usa dispositivos y control para cambiar las rutas enemigas y defender ángulos peligrosos.', traits: ['Torreta', 'Control', 'Embudos'] },
    { slug: 'doc', name: 'Doc', role: 'Especialista de apoyo', type: 'support', status: 'Resumen', description: 'Estabiliza el escuadrón, gestiona el desgaste y mantiene la eficacia en misiones largas.', traits: ['Recuperación', 'Mejoras', 'Sostenimiento'] },
    { slug: 'recon', name: 'Recon', role: 'Inteligencia y munición', type: 'support', status: 'Resumen', description: 'Revela amenazas, mejora el enfoque y evita que el equipo se quede sin recursos.', traits: ['Inteligencia', 'Munición', 'Marcado'] },
    { slug: 'specialist', name: 'Specialist', role: 'Marine personalizable de final de juego', type: 'control', status: 'Resumen', description: 'Una clase flexible construida con herramientas, rasgos y necesidades del escuadrón.', traits: ['Kit libre', 'Final de juego', 'Rol flexible'] },
  ], compareTitle: 'Elige según el equipo, no solo por el daño', compareDescription: 'Un escuadrón equilibrado necesita control, daño contra élites y recursos estables.', beginnerTitle: '¿Nuevo en el equipo?', beginnerDescription: 'Empieza con el Marine Colonial para aprender distancias, objetivos y ritmo de habilidades.', readGuide: 'Leer guía' },
  article: { back: 'Clases', contents: 'En esta página', updated: 'Actualizado', readTime: '8 min de lectura', difficulty: 'Dificultad', role: 'Rol', related: 'Continúa el informe', relatedDescription: 'Completa tus conocimientos antes de la siguiente misión.', beginnerGuide: 'Guía para principiantes', classesIndex: 'Todas las clases' },
  footer: { ...en.footer, about: 'Una wiki independiente creada por fans sobre clases, configuraciones, armas y tácticas cooperativas de Aliens: Fireteam Elite 2. Sin afiliación con Cold Iron Studios ni 20th Century Studios.', explore: 'Explorar', official: 'Enlaces oficiales', disclaimer: 'Los nombres, imágenes y marcas pertenecen a sus respectivos propietarios.', game: 'Sitio oficial del juego', youtube: 'Tráiler oficial' },
};

const dictionaries: Record<Locale, Dictionary> = { en, ja, de, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
