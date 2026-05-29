// Canonical content for the ten principles of Yama & Niyama.
// Source: "A Guide to Human Conduct" (text.txt at repo root).
// Each principle page is a standalone micro-site; this is the shared
// data the scaffolding generator seeds pages from. Edit freely afterwards.

export const principles = [
  {
    slug: "ahimsa",
    group: "yama",
    order: 1,
    sanskrit: "अहिंसा",
    translit: "Ahiṃsá",
    gloss: "Non-harming",
    sutra: "Manovákkáyaeh sarvabhútánámapiidánamahiṃsá.",
    definition:
      "Not inflicting pain or hurt on anybody by thought, word or action — guiding one's conduct so that it is unjust to none.",
    note:
      "Ahiṃsá is not the impossible refusal to ever take life. Existence itself depends on other forms of life. What it forbids is the intention to harm. The use of force against an aggressor is valour; desisting from it is cowardice.",
  },
  {
    slug: "satya",
    group: "yama",
    order: 2,
    sanskrit: "सत्य",
    translit: "Satya",
    gloss: "Benevolent truthfulness",
    sutra: "Parahitártham váunmanaso yathárthatvaṃ satyam.",
    definition:
      "The proper action of mind and the right use of words, with the spirit of welfare. Not mere fact (rta), but truth bent toward the good.",
    note:
      "If a fact, told plainly, would cause an innocent to be murdered, then to misguide the aggressor is the higher truth. The dignity of Satya is the welfare it serves, not the literalness of the words.",
  },
  {
    slug: "asteya",
    group: "yama",
    order: 3,
    sanskrit: "अस्तेय",
    translit: "Asteya",
    gloss: "Non-stealing",
    sutra: "Paradravyápaharańa tyágo'steyam.",
    definition:
      "Not taking possession of what belongs to others — in deed or in thought, by depriving or by planning to deprive.",
    note:
      "Theft is fourfold: taking physically, planning to take, depriving others of their due, and planning that deprivation. Petty cheating — ticketless travel, adulterated goods — violates asteya as surely as armed robbery.",
  },
  {
    slug: "brahmacarya",
    group: "yama",
    order: 4,
    sanskrit: "ब्रह्मचर्य",
    translit: "Brahmacarya",
    gloss: "Remaining in Brahma",
    sutra: "Brahmańi vicarańam iti Brahmacaryam.",
    definition:
      "To treat every object one comes in contact with as an expression of Brahma, not as a crude finite thing — so the mind never detaches from the Cosmic.",
    note:
      "It has nothing to do with the preservation of semen. Through this ideation, Preya (attraction to the crude) becomes Shreya (attraction to the ultimate), and Káma becomes Prema. Control means abiding by nature's laws, not killing desire.",
  },
  {
    slug: "aparigraha",
    group: "yama",
    order: 5,
    sanskrit: "अपरिग्रह",
    translit: "Aparigraha",
    gloss: "Non-accumulation",
    sutra: "Deharakśátiriktabhogasádhanásviikaro'parigraha.",
    definition:
      "Non-indulgence in amenities and comforts superfluous to the preservation of life.",
    note:
      "An endless fight to reduce one's own objects of comfort out of sympathy for common people. What counts as 'necessary' shifts with person, place and time — the bullock-cart in the age of railways has no meaning here.",
  },
  {
    slug: "shaoca",
    group: "niyama",
    order: 6,
    sanskrit: "शौच",
    translit: "Shaoca",
    gloss: "Purity",
    sutra: "Shaocantu dvividhaṃ proktaṃ báhyamábhyantarantatha.",
    definition:
      "Cleanliness of two kinds: external (body, clothes, surroundings) and internal (the mind, cleansed of the dirt of complexes and selfish motive).",
    note:
      "Cleansing the mind is far more laborious than cleansing the body. Greed is cured by charity, anger by politeness — selfless service to humanity is the only remedy for mental impurity.",
  },
  {
    slug: "santosha",
    group: "niyama",
    order: 7,
    sanskrit: "सन्तोष",
    translit: "Santośa",
    gloss: "Contentment",
    sutra: "Tośa — the state of mental ease; Santośa — a state of proper ease.",
    definition:
      "Being contented with the earnings of normal labour, without undue pressure on body and mind, keeping aloof from external allurements.",
    note:
      "Human desire knows no end; the millionaire wants millions more. Contentment does not mean tolerating exploitation in silence — you must still fight for your rights — but it forbids wasting your energy under the sway of greed.",
  },
  {
    slug: "tapah",
    group: "niyama",
    order: 8,
    sanskrit: "तपः",
    translit: "Tapah",
    gloss: "Sacrificing service",
    sutra: "To shoulder the sorrows and miseries of others, to make them happy.",
    definition:
      "Penance through service — bearing physical discomfort to relieve the grief of those weaker, poorer, and more downtrodden than oneself.",
    note:
      "Tapah without discrimination is misused. Banquet not the rich — feed the starving. Send not presents to superiors — send medicine to the sick. The served is Brahma; the service is the sádhaná.",
  },
  {
    slug: "svadhyaya",
    group: "niyama",
    order: 9,
    sanskrit: "स्वाध्याय",
    translit: "Svádhyáya",
    gloss: "Clear understanding",
    sutra: "Má shabdát rasaná jineyá tadaṃshán rasaná priye…",
    definition:
      "Not merely reading or hearing a spiritual subject, but understanding its underlying meaning and proper spirit.",
    note:
      "The same word carries different meanings in different contexts. 'Máṃsa sádhaná' means control over the tongue's speech — not the slaughter of goats. To grasp the idea first is the whole discipline.",
  },
  {
    slug: "ishvara-pranidhana",
    group: "niyama",
    order: 10,
    sanskrit: "ईश्वर प्रणिधान",
    translit: "Iishvara Prańidhána",
    gloss: "Shelter in the Cosmic",
    sutra: "Klesha-karma-vipákáshaeraparámrśt́ah Puruśavisheśa Iishvarah.",
    definition:
      "To establish oneself in the Cosmic idea — to accept Iishvara as the only ideal of life, moving with accelerated speed toward the Supreme Shelter.",
    note:
      "Entirely an effort of bháva, of ideation. Your Iishvara is not deaf — do not shout. Mental japa, witnessed by the mind itself, is the highest process. The most important of all ten observances.",
  },
];

export const groups = {
  yama: {
    title: "Yama",
    subtitle: "Sádhaná",
    meaning: "Regulated conduct toward the external world",
    intro:
      "The first lesson of human conduct. Five principles by which the unit mind maintains balance in the extroversial spheres of life — a pauseless war waged against every opposing force.",
  },
  niyama: {
    title: "Niyama",
    subtitle: "Sádhaná",
    meaning: "Regulated conduct toward oneself",
    intro:
      "The personal observances. Where Yama works on the physical and psychic strata, Niyama carries equal weight in the mundane, the supramundane and the spiritual.",
  },
};

export const site = {
  title: "Yama & Niyama",
  tagline: "A Guide to Human Conduct",
  attribution: "Ten moral principles · after Shrii Shrii Ánandamúrti",
  base: "/yama-niyama/",
};
