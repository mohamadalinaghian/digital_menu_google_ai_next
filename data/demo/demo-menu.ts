import { Category, Product, Tag, VenueInfo } from '@/types/menu';

/**
 * ============================================================================
 * DEMO / PROTOTYPE MENU DATA
 * ============================================================================
 * NOTE: This file contains mock prototype data used during initial UX/UI design.
 * DO NOT USE IN PRODUCTION.
 * 
 * To enable this dataset in development mode, set:
 * NEXT_PUBLIC_USE_DEMO_DATA=true
 * in your .env.local file.
 * ============================================================================
 */

export const demoVenueInfo: VenueInfo = {
  name: {
    fa: 'چینو',
    en: 'Chino',
    ar: 'تشينو',
  },
  tagline: {
    fa: 'کافه و رستوران اصیل در شاهرود',
    en: 'Refined Café & Restaurant in Shahroud',
    ar: 'مقهى ومطعم راقٍ في شاهرود',
  },
  description: {
    fa: 'تجربه‌ای آرام از طعم‌های اصیل، قهوه‌های تخصصی برگزیده، دم‌نوش‌های بومی و دست‌پخت‌های تازه در قلب کهن‌شهر شاهرود.',
    en: 'A serene sanctuary of specialty coffees, local botanical infusions, and freshly baked artisanal pastry in historic Shahroud.',
    ar: 'تجربة هادئة من النكهات الأصيلة والقهوة التخصصية والمشروبات العشبية والمخبوزات الطازجة في قلب شاهرود.',
  },
  city: {
    fa: 'شاهرود',
    en: 'Shahroud',
    ar: 'شاهرود',
  },
  address: {
    fa: 'شاهرود، خیابان فردوسی، نبش کوچه یاس',
    en: 'Ferdowsi Ave, Corner of Yas Alley, Shahroud',
    ar: 'شاهرود، شارع فردوسي، زاوية زقاق ياس',
  },
  hours: {
    fa: 'همه روزه از ۸:۳۰ صبح تا ۲۳:۳۰ شب',
    en: 'Daily from 8:30 AM to 11:30 PM',
    ar: 'يومياً من ٨:٣٠ صباحاً حتى ١١:٣٠ مساءً',
  },
  phone: '02332345678',
  wifiSsid: 'Chino_Guest_5G',
  wifiPassword: 'chino-shahroud',
  instagram: 'chino.cafe',
  googleMapsUrl: 'https://maps.google.com/?q=Shahroud',
};

export const demoCategoriesData: Category[] = [
  {
    id: 'espresso_bar',
    title: {
      fa: 'اسپرسو بار',
      en: 'Espresso Bar',
      ar: 'بار الإسبريسو',
    },
    subtitle: {
      fa: 'عصاره‌گیری دقیق از دانه‌های تازه‌برشت با آب تصفیه‌شده معدنی',
      en: 'Precision extraction with fresh-roasted single origins & house blends',
      ar: 'استخلاص دقيق من حبوب طازجة التحميص',
    },
  },
  {
    id: 'pourover_specialty',
    title: {
      fa: 'قهوه‌های دمی و تخصصی',
      en: 'Specialty Brews',
      ar: 'القهوة المقطرة والتخصصية',
    },
    subtitle: {
      fa: 'متدهای V60، کمکس و ائروپرس همراه با یادداشت‌های طعمی روشن',
      en: 'V60, Chemex & Aeropress manual brews highlighting vibrant terroir',
      ar: 'طرق V60 وكيمكس وإيروبرس بنكهات واضحة',
    },
  },
  {
    id: 'cold_beverages',
    title: {
      fa: 'نوشیدنی‌های سرد و کوکتل‌بار',
      en: 'Cold Drinks & Mocktails',
      ar: 'المشروبات الباردة والكوكتيلات',
    },
    subtitle: {
      fa: 'سرددم‌های خنک، شربت‌های گیاهی و کوکتل‌های امضای چینو',
      en: 'Cold brews, house botanical coolers, and signature iced mocktails',
      ar: 'مشروبات باردة منعشة وخلطات خاصة',
    },
  },
  {
    id: 'botanical_teas',
    title: {
      fa: 'دم‌نوش‌های بومی و چای‌های خاص',
      en: 'Artisanal Teas & Infusions',
      ar: 'الشاي الفاخر والمشروبات العشبية',
    },
    subtitle: {
      fa: 'برگ‌های چای بهاره لاهیجان و ترکیب‌های گیاهی اختصاصی',
      en: 'Spring harvest Lahijan teas and regional herb infusions',
      ar: 'شاي لاهيجان وخلاصات أعشاب إقليمية',
    },
  },
  {
    id: 'pastries_desserts',
    title: {
      fa: 'دسرها و شیرینی‌های تازه',
      en: 'Pastries & Desserts',
      ar: 'الحلويات والمخبوزات الطازجة',
    },
    subtitle: {
      fa: 'پخت روزانه در کارگاه قنادی چینو با کره طبیعی و پسته شاهرود',
      en: 'Baked daily with natural butter and local Shahroud pistachios',
      ar: 'مخبوزات يومية بالزبدة الطبيعية وفستق شاهرود',
    },
  },
  {
    id: 'breakfast_brunch',
    title: {
      fa: 'صبحانه و برانچ',
      en: 'Breakfast & Brunch',
      ar: 'الفطور والبرانش',
    },
    subtitle: {
      fa: 'سرو از ۸:۳۰ الی ۱۲:۳۰ با نان گرم خمیرترش و تخم‌مرغ محلی',
      en: 'Served 8:30 to 12:30 with warm sourdough and farm eggs',
      ar: 'يقدم من ٨:٣٠ حتى ١٢:٣٠ مع خبز الساوردو الساخن',
    },
  },
  {
    id: 'savory_plates',
    title: {
      fa: 'غذاها و بشقاب‌های گرم',
      en: 'Savory Plates & Mains',
      ar: 'الأطباق الرئيسية والمقبلات',
    },
    subtitle: {
      fa: 'پنینی‌های ترد، پاستاهای دست‌ساز و سالادهای فصلی سالم',
      en: 'Toasted paninis, fresh handmade pasta, and seasonal garden bowls',
      ar: 'بانيني مقرمش وباستا طازجة وسلطات موسمية',
    },
  },
];

export const demoTagsData: Tag[] = [
  {
    id: 'signature',
    label: { fa: 'امضای چینو', en: 'Chino Signature', ar: 'توقيع تشينو' },
    variant: 'gold',
  },
  {
    id: 'popular',
    label: { fa: 'محبوب‌ترین‌ها', en: 'Guest Favorite', ar: 'الأكثر طلباً' },
    variant: 'amber',
  },
  {
    id: 'local_shahroud',
    label: { fa: 'طعم بومی شاهرود', en: 'Shahroud Terroir', ar: 'نكهة شاهرود المحلية' },
    variant: 'emerald',
  },
  {
    id: 'hot',
    label: { fa: 'گرم', en: 'Hot', ar: 'ساخن' },
    variant: 'default',
  },
  {
    id: 'cold',
    label: { fa: 'سرد و خنک', en: 'Cold & Refreshing', ar: 'بارد ومنعش' },
    variant: 'default',
  },
  {
    id: 'vegan',
    label: { fa: 'گیاهی و وگان', en: 'Plant-Based / Vegan', ar: 'نباتي بالكامل' },
    variant: 'emerald',
  },
  {
    id: 'sugar_free',
    label: { fa: 'بدون شکر افزوده', en: 'No Added Sugar', ar: 'بدون سكر مضاف' },
    variant: 'default',
  },
  {
    id: 'lactose_free',
    label: { fa: 'بدون لاکتوز', en: 'Lactose-Free', ar: 'خالٍ من اللاكتوز' },
    variant: 'default',
  },
  {
    id: 'arabica100',
    label: { fa: '۱۰۰٪ عربیکا تخصصی', en: '100% Specialty Arabica', ar: '١٠٠٪ أرابيكا تخصصية' },
    variant: 'gold',
  },
];

export const demoProductsData: Product[] = [
  {
    id: 'chino_saffron_macchiato',
    categoryId: 'espresso_bar',
    name: {
      fa: 'اسپرسو ماکیاتو زعفرانی چینو',
      en: 'Chino Saffron Macchiato',
      ar: 'ماكياتو الزعفران الخاص بتشينو',
    },
    price: 145000,
    description: {
      fa: 'دبل شات اسپرسو ۱۰۰٪ عربیکای اتیوپی، فوم مخملی شیر با دم‌کرده غلیظ زعفران قائنات و هل سبز.',
      en: 'Double shot 100% Arabica Ethiopian espresso with velvety micro-foam, pure saffron reduction, and green cardamom.',
      ar: 'شوت مزدوج إسبريسو أرابيكا إثيوبية مع رغوة حليب مخملية وخلاصة الزعفران النقي والهيل.',
    },
    tags: ['signature', 'hot', 'arabica100'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
    imageAlt: {
      fa: 'ماکیاتو زعفرانی با فوم مخملی و نخ‌های زعفران',
      en: 'Saffron macchiato with velvety micro-foam and saffron threads',
      ar: 'ماكياتو الزعفران مع رغوة الحليب وخيوط الزعفران',
    },
    isCurated: true,
    curatedNote: {
      fa: 'طعم‌یاد گلی و زعفرانی با اسیدیته لطیف مرکباتی و بافت ابریشمی',
      en: 'Floral saffron aroma, subtle citrus brightness, and silky finish',
      ar: 'عطر زهري مع حمضية لطيفة وقوام حريري ناعم',
    },
    origin: {
      fa: 'اتیوپی یرگاچف + زعفران دست‌چین قائنات',
      en: 'Ethiopia Yirgacheffe + Hand-picked Qayen Saffron',
      ar: 'إثيوبيا يرغاتشيف + زعفران قاين اليدوي',
    },
    prepTimeMinutes: 5,
    calories: 110,
    available: true,
  },
  {
    id: 'karak_saffron_tea',
    categoryId: 'botanical_teas',
    name: {
      fa: 'چای کرک زعفرانی چینو',
      en: 'Chino Saffron Karak Tea',
      ar: 'شاي كرك بالزعفران تشينو',
    },
    price: 135000,
    description: {
      fa: 'چای سیاه اعلا پخته‌شده در شیر تازه، همراه با ادویه‌های گرم هل، زنجبیل، دارچین و زعفران ناب.',
      en: 'Premium black tea simmered slowly in rich milk with crushed cardamom pods, cinnamon bark, ginger, and pure saffron.',
      ar: 'شاي أسود فاخر مطبوخ على نار هادئة بالحليب الطازج مع الهيل والزنجبيل والقرفة والزعفران.',
    },
    tags: ['signature', 'hot', 'popular'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    imageAlt: {
      fa: 'چای کرک زعفرانی با بخار ملایم در فنجان سفالی',
      en: 'Steaming saffron karak tea in ceramic cup',
      ar: 'شاي كرك دافئ مع خيوط الزعفران في كوب خزفي',
    },
    isCurated: true,
    curatedNote: {
      fa: 'نوشیدنی گرم، ادویه‌ای و پرملات با شیرینی ملایم و آرامش‌بخش',
      en: 'Warm spice depth with comforting aromatic sweetness and lingering saffron',
      ar: 'مشروب دافئ وغني بالتوابل العطرية ونعومة الحليب',
    },
    origin: {
      fa: 'ترکیب اختصاصی ادویه چینو + چای بهاره لاهیجان',
      en: 'Chino House Spice Blend + Spring Lahijan Tea',
      ar: 'خلطة توابل تشينو الخاصة + شاي لاهيجان الربيعي',
    },
    prepTimeMinutes: 6,
    calories: 165,
    available: true,
  },
  {
    id: 'shahroud_pistachio_cheesecake',
    categoryId: 'pastries_desserts',
    name: {
      fa: 'چیزکیک پسته و گلاب شاهرود',
      en: 'Shahroud Pistachio & Rosewater Cheesecake',
      ar: 'تشيز كيك الفستق وماء الورد شاهرود',
    },
    price: 185000,
    description: {
      fa: 'چیزکیک تنوری به سبک سن سباستین با کرم پسته برشته شاهرود، خمیر کراست بیسکویتی هل‌دار و شهد گلاب کوهپایه.',
      en: 'Basque-style baked cheesecake infused with toasted local Shahroud pistachio butter, cardamom biscuit crust, and rosewater glaze.',
      ar: 'تشيز كيك مخبوز على الطريقة الباسكية مع زبدة فستق شاهرود المحمص وقاعدة بسكويت الهيل ولمسة ماء الورد.',
    },
    tags: ['signature', 'local_shahroud', 'popular'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    imageAlt: {
      fa: 'چیزکیک پسته و گلاب با پودر پسته تازه شاهرود',
      en: 'Pistachio cheesecake with crushed Shahroud pistachios',
      ar: 'تشيز كيك الفستق مع رشة فستق شاهرود الطازج',
    },
    isCurated: true,
    curatedNote: {
      fa: 'بافت کرمی مخملی با طعم غنی پسته اعلا و عطر مینیاتوری گلاب',
      en: 'Velvety burnt custard texture with deep nutty pistachio richness',
      ar: 'قوام كريمي مخملي مع نكهة الفستق الغنية وعطر الورد الهادئ',
    },
    origin: {
      fa: 'پسته تازه باغات شاهرود + گلاب سنتی',
      en: 'Fresh Shahroud Orchards Pistachio + Natural Rosewater',
      ar: 'فستق مزارع شاهرود الطازج + ماء ورد تقليدي',
    },
    allergens: [
      { fa: 'شیر و لبنیات', en: 'Dairy / Milk', ar: 'الحليب ومشتقاته' },
      { fa: 'پسته و مغزیجات', en: 'Pistachio / Tree Nuts', ar: 'الفستق والمكسرات' },
      { fa: 'گلوتن', en: 'Gluten', ar: 'الغلوتين' },
    ],
    prepTimeMinutes: 3,
    calories: 340,
    available: true,
  },
  {
    id: 'espresso_double',
    categoryId: 'espresso_bar',
    name: {
      fa: 'اسپرسو دبل شات (۱۰۰٪ عربیکا)',
      en: 'Double Espresso (100% Specialty Arabica)',
      ar: 'إسبريسو مزدوج (١٠٠٪ أرابيكا تخصصية)',
    },
    price: 95000,
    description: {
      fa: 'عصاره‌گیری دوپیو ۱۸ گرم سابه با کرمای فندقی متراکم و یادداشت‌های شکلات تلخ و آلبالوی خشک.',
      en: '18g dose double shot with dense hazelnut crema, dark cocoa notes, and a subtle dried cherry acidity.',
      ar: 'استخلاص مزدوج بجرعة ١٨ غرام مع كريمة كثيفة ونكهات الشوكولاتة الداكنة.',
    },
    tags: ['hot', 'arabica100', 'sugar_free', 'vegan'],
    origin: {
      fa: 'کلمبیا ویلا بوئنا + برزیل سانتوس',
      en: 'Colombia Villa Buena + Brazil Santos',
      ar: 'كولومبيا فيلا بوينا + برازيل سانتوس',
    },
    prepTimeMinutes: 4,
    calories: 5,
    available: true,
  },
  {
    id: 'shahroud_breakfast_platter',
    categoryId: 'breakfast_brunch',
    name: {
      fa: 'سینی صبحانه اصیل چینو',
      en: 'Chino Traditional Breakfast Platter',
      ar: 'صينية إفطار تشينو التقليدية',
    },
    price: 240000,
    description: {
      fa: 'تخم‌مرغ نیمرو با روغن حیوانی محلی، پنیر لیقوان تبریز، گردو و مغز پسته شاهرود، کره محلی، عسل آویشن شاه‌کوه و نان خمیرترش داغ.',
      en: 'Farm-fresh sunny eggs with clarified butter, Lighvan sheep cheese, Shahroud walnuts & pistachios, local honey, and warm hearth bread.',
      ar: 'بيض مقلي بالزبدة البلدية، جبن ليقوان، جوز وفستق شاهرود، عسل شاهكوه الجبلي وخبز ساخن.',
    },
    tags: ['popular', 'local_shahroud', 'hot'],
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop',
    prepTimeMinutes: 12,
    calories: 580,
    available: true,
  },
];
