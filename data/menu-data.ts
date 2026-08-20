import { Category, Product, Tag, VenueInfo } from "@/types/menu";

export const venueInfo: VenueInfo = {
  name: {
    fa: "چینو",
    en: "CHINO",
    ar: "تشينو",
  },
  tagline: {
    fa: "کافه و رستوران اصیل شاهرود",
    en: "Refined Café & Restaurant · Shahroud",
    ar: "مقهى ومطعم تشينو الأصيل في شاهرود",
  },
  description: {
    fa: "پیوند هارمونیک طراحی معاصر با خاطرات نوستالژیک ایران و میزبانی صمیمانه در دل کهن‌شهر شاهرود.",
    en: "A harmonious fusion of contemporary refinement, Iranian nostalgic warmth, and sincere hospitality in historic Shahroud.",
    ar: "تناغم راقٍ يجمع بين التصميم المعاصر ودفء الذكريات الإيرانية وحسن الضيافة في قلب شاهرود التاريخية.",
  },
  city: {
    fa: "شاهرود",
    en: "Shahroud",
    ar: "شاهرود",
  },
  address: {
    fa: "شاهرود، خیابان فردوسی، نبش کوچه یاس",
    en: "Ferdowsi Ave, Corner of Yas Alley, Shahroud, Iran",
    ar: "شاهرود، شارع فردوسي، زاوية زقاق ياس",
  },
  hours: {
    fa: "همه روزه از ۸:۳۰ صبح الی ۲۳:۳۰ شب",
    en: "Daily from 8:30 AM to 11:30 PM",
    ar: "يومياً من ٨:٣٠ صباحاً حتى ١١:٣٠ مساءً",
  },
  phone: "02332348890",
  wifiSsid: "Chino_Guest",
  wifiPassword: "chino_shahroud",
  instagram: "chino.shahroud",
  googleMapsUrl: "https://maps.google.com/?q=Shahroud+Chino+Cafe",
};

export const tagsData: Tag[] = [
  {
    id: "signature",
    label: {
      fa: "امضای چینو",
      en: "Signature",
      ar: "توقيع تشينو",
    },
    variant: "gold",
  },
  {
    id: "popular",
    label: {
      fa: "محبوب‌ترین‌ها",
      en: "Popular",
      ar: "الأكثر طلباً",
    },
    variant: "ruby",
  },
  {
    id: "local_shahroud",
    label: {
      fa: "طعم بومی شاهرود",
      en: "Shahroud Local",
      ar: "نكهة شاهرودية",
    },
    variant: "emerald",
  },
  {
    id: "hot",
    label: {
      fa: "گرم",
      en: "Hot",
      ar: "ساخن",
    },
    variant: "amber",
  },
  {
    id: "cold",
    label: {
      fa: "سرد و خنک",
      en: "Cold & Iced",
      ar: "بارد ومنعش",
    },
    variant: "default",
  },
  {
    id: "vegan",
    label: {
      fa: "گیاهی و وگان",
      en: "Plant-Based",
      ar: "نباتي",
    },
    variant: "emerald",
  },
  {
    id: "sugar_free",
    label: {
      fa: "بدون شکر افزوده",
      en: "Sugar-Free",
      ar: "بدون سكر",
    },
    variant: "default",
  },
  {
    id: "arabica100",
    label: {
      fa: "۱۰۰٪ عربیکا تخصصی",
      en: "100% Arabica",
      ar: "١٠٠٪ أرابيكا",
    },
    variant: "gold",
  },
];

export const categoriesData: Category[] = [
  {
    id: "espresso_bar",
    title: {
      fa: "اسپرسو بار",
      en: "Espresso Bar",
      ar: "ركن الإسبريسو",
    },
    subtitle: {
      fa: "عصاره‌گیری دقیق از دانه‌های تخصصی و برشته‌کاری ملایم",
      en: "Precise extraction of specialty single-origin and house blends",
      ar: "استخلاص دقيق من أجود حبوب البن المحمصة بعناية",
    },
    iconName: "Coffee",
  },
  {
    id: "specialty_brew",
    title: {
      fa: "قهوه‌های دمی و تخصصی",
      en: "Specialty & Pour-Over",
      ar: "القهوة المقطرة والمختصة",
    },
    subtitle: {
      fa: "روش‌های دمی دستی V60، کالیتا و کمکس با نمایان‌سازی نُت‌های میوه‌ای و گلی",
      en: "Manual pour-over showcasing floral, fruity & chocolate notes",
      ar: "طرق التقطير اليدوي لإبراز النكهات الزهرية والفاكهية الفاخرة",
    },
    iconName: "Flame",
  },
  {
    id: "cold_bar",
    title: {
      fa: "نوشیدنی‌های سرد و بار خنک",
      en: "Cold Bar & Iced Drinks",
      ar: "المشروبات الباردة والمنعشات",
    },
    subtitle: {
      fa: "ترکیبات دست‌ساز طراوت‌بخش، آیس لاته، موکتیل‌ها و کلدبرو",
      en: "Artisanal cold brew, iced lattes, handcrafted mocktails & tonic infusions",
      ar: "مشروبات باردة منعشة، قهوة مقطرة باردة وموكتيلات مبتكرة",
    },
    iconName: "Sparkles",
  },
  {
    id: "herbal_tradition",
    title: {
      fa: "دم‌نوش‌ها و شربت‌های اصیل",
      en: "Artisanal Infusions & Cordials",
      ar: "الأعشاب والمشروبات التراثية",
    },
    subtitle: {
      fa: "گیاهان دارویی دامنه‌های البرز و شربت‌های نوستالژیک زعفران و بهارنارنج",
      en: "Alborz mountain herbal teas and nostalgic Persian saffron-rose infusions",
      ar: "أعشاب جبال البرز الطبيعية والمشروبات التراثية المعطرة بالزعفران",
    },
    iconName: "Leaf",
  },
  {
    id: "breakfast_brunch",
    title: {
      fa: "صبحانه و برانچ",
      en: "Breakfast & Brunch",
      ar: "الفطور والبرانش",
    },
    subtitle: {
      fa: "املت‌های سنتی، نان گرم تازه، تست‌های آووکادو و پنیرهای محلی",
      en: "Artisan toasts, Persian heritage morning platters and fluffy eggs",
      ar: "أطباق الفطور التقليدية، الأومليت الطازج والخبز الساخن",
    },
    iconName: "Sun",
  },
  {
    id: "main_plates",
    title: {
      fa: "خوراک‌های سبک و امضای چینو",
      en: "Chino Signatures & Light Fare",
      ar: "أطباق تشينو المميزة والمقبلات",
    },
    subtitle: {
      fa: "پاستاهای دست‌ساز، پنینی‌های گریل شده و سالادهای اختصاصی با پستوی تازه",
      en: "Handmade pasta, grilled gourmet panini and fresh seasonal salads",
      ar: "باستا طازجة، بانيني مشوي وسلطات غنية بالصوصات الحرفية",
    },
    iconName: "UtensilsCrossed",
  },
  {
    id: "pastry_dessert",
    title: {
      fa: "شیرینی و دسرهای روز",
      en: "Daily Pastries & Cakes",
      ar: "الحلويات والكعك الطازج",
    },
    subtitle: {
      fa: "پخت روزانه در کارگاه چینو با استفاده از پسته تازه شاهرود و وانیل ماداگاسکار",
      en: "Freshly baked daily with Shahroud premium pistachios & bourbon vanilla",
      ar: "مخبوزات طازجة يومياً مع فستق شاهرود الفاخر والفانيليا الطبيعية",
    },
    iconName: "Cake",
  },
];

export const productsData: Product[] = [
  // =================== ESPRESSO BAR ===================
  {
    id: "chino_saffron_macchiato",
    categoryId: "espresso_bar",
    name: {
      fa: "اسپرسو ماکیاتو زعفرانی چینو",
      en: "Chino Saffron Macchiato",
      ar: "ماكياتو الإسبريسو بالزعفران من تشينو",
    },
    price: 165000,
    description: {
      fa: "دبل شات اسپرسو ۱۰۰٪ عربیکا، فوم ابریشمی شیر تازه با عصاره دست‌ساز زعفران سرگل قائنات و نُت هل سبز.",
      en: "Double shot of 100% Arabica, velvety microfoam infused with handcrafted Sargol saffron extract and cardamom essence.",
      ar: "جرعة مزدوجة من بن الأرابيكا مع رغوة حليب حريرية وخلاصة الزعفران الفاخر مع لمسة هيل.",
    },
    tags: ["signature", "popular", "hot", "arabica100"],
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    imageAlt: {
      fa: "اسپرسو ماکیاتو زعفرانی با فوم لطیف",
      en: "Chino saffron macchiato with silky microfoam",
      ar: "ماكياتو الزعفران مع رغوة الحليب",
    },
    isCurated: true,
    curatedNote: {
      fa: "امضای منوی باریستای چینو؛ هماهنگی بی‌نظیر قهوه تخصصی با عطر زعفران ایرانی.",
      en: "Chino's signature creation; exquisite harmony between specialty espresso and Persian saffron.",
      ar: "توقيع باريستا تشينو؛ تناغم ساحر بين الإسبريسو الفاخر وعبق الزعفران الإيراني.",
    },
    origin: {
      fa: "عربیکا کلمبیا و اتیوپی با زعفران قائنات",
      en: "Colombia & Ethiopia blend with Sargol Saffron",
      ar: "مزيج كولومبيا وإثيوبيا مع زعفران قائنات",
    },
    prepTimeMinutes: 5,
    calories: 85,
    available: true,
    customizationGroups: [
      {
        id: "milk_type",
        title: { fa: "نوع شیر", en: "Milk Choice", ar: "نوع الحليب" },
        options: [
          { id: "regular", name: { fa: "شیر پرچرب محلی", en: "Fresh Whole Milk", ar: "حليب طازج كامل الدسم" }, isDefault: true },
          { id: "oat", name: { fa: "شیر جو دوسر (گیاهی)", en: "Oat Milk (Plant-based)", ar: "حليب الشوفان النباتي" }, priceDelta: 25000 },
          { id: "almond", name: { fa: "شیر بادام", en: "Almond Milk", ar: "حليب اللوز" }, priceDelta: 25000 },
        ],
      },
    ],
  },
  {
    id: "espresso_single_origin",
    categoryId: "espresso_bar",
    name: {
      fa: "اسپرسو تک‌خاستگاه (سینگل اوریجین)",
      en: "Single Origin Espresso",
      ar: "إسبريسو أحادي المصدر",
    },
    price: 110000,
    description: {
      fa: "عصاره‌گیری دوگانه (دپیو) با کرمای متراکم طلایی، شفافیت طعمی بالا و ته‌مزه مرکبات و کاکائو تلخ.",
      en: "Double extraction with rich crema, notable sweetness, bright citrus acidity, and a dark cocoa finish.",
      ar: "استخلاص مزدوج بكريمة ذهبية غنية ونغمات من الحمضيات والكاكاو الداكن.",
    },
    tags: ["arabica100", "hot", "sugar_free"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    imageAlt: {
      fa: "شات اسپرسو سینگل با فنجان کلاسیک",
      en: "Single origin espresso shot",
      ar: "فنجان إسبريسو كلاسيكي",
    },
    origin: {
      fa: "اتیوپی یرگاچف - فرآوری شسته",
      en: "Ethiopia Yirgacheffe - Washed Process",
      ar: "إثيوبيا يرغاتشيفي - معالجة مغسولة",
    },
    prepTimeMinutes: 4,
    calories: 5,
    available: true,
  },
  {
    id: "flat_white",
    categoryId: "espresso_bar",
    name: {
      fa: "فلت وایت چینو",
      en: "Chino Flat White",
      ar: "فلات وايت تشينو",
    },
    price: 145000,
    description: {
      fa: "ریسترتو دوگانه متراکم در کنار بافت مخملی میکروفوم شیر، مناسب دوستداران طعم قهوه پررنگ با نرمی شیر.",
      en: "Double ristretto paired with silk-textured microfoam, emphasizing rich espresso boldness with dairy sweetness.",
      ar: "جرعة ريستريتو مزدوجة مع رغوة حليب ناعمة حريرية لعشاق القهوة الغنية.",
    },
    tags: ["popular", "hot", "arabica100"],
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 5,
    calories: 120,
    available: true,
  },
  {
    id: "cappuccino_classic",
    categoryId: "espresso_bar",
    name: {
      fa: "کاپوچینو کلاسیک",
      en: "Classic Cappuccino",
      ar: "كابتشينو كلاسيكي",
    },
    price: 140000,
    description: {
      fa: "ترکیب متعادل اسپرسو، شیر گرم و فوم متراکم با پودر دارچین سیلان یا کاکائوی هلندی به دلخواه شما.",
      en: "Harmonious layers of espresso, steamed milk, and dense foam dusted with Dutch cocoa or Ceylon cinnamon.",
      ar: "مزيج متوازن من الإسبريسو والحليب المبخر ورغوة كثيفة مع رشة قرفة أو كاكاو هولندي.",
    },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 5,
    calories: 130,
    available: true,
  },
  {
    id: "caramel_cinnamon_latte",
    categoryId: "espresso_bar",
    name: {
      fa: "کافه لاته کارامل و دارچین",
      en: "Caramel & Cinnamon Latte",
      ar: "لاتيه الكراميل والقرفة",
    },
    price: 160000,
    description: {
      fa: "لاته لطیف با سس کارامل دست‌ساز چینو، دارچین چوبی تازه ساییده و شیر ابریشمی.",
      en: "Smooth espresso latte blended with house-made salted caramel and freshly ground cinnamon bark.",
      ar: "لاتيه ناعم مع صوص كراميل معد منزلياً وقرفة طازجة.",
    },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 6,
    calories: 210,
    available: true,
  },

  // =================== SPECIALTY BREW ===================
  {
    id: "v60_pourover_kenya",
    categoryId: "specialty_brew",
    name: {
      fa: "قهوه دمی V60 - کنیا نیری",
      en: "V60 Pour-Over · Kenya Nyeri",
      ar: "قهوة مقطرة V60 · كينيا نييري",
    },
    price: 175000,
    description: {
      fa: "دم‌آوری تخصصی با فیلتر کاغذی، اسیدیته آبدار توت‌فرنگی و انگور سیاه، تن‌واری شفاف و پایانی شکوفه‌ای.",
      en: "Hand-poured specialty filter brew featuring juicy blackberry and blackcurrant notes with floral brightness.",
      ar: "تقطير يدوي مختص يبرز نكهات التوت الأسود والكشمش مع حمضية فاكهية منعشة.",
    },
    tags: ["signature", "hot", "sugar_free", "arabica100"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    origin: {
      fa: "منطقه نیری کنیا - ارتفاع ۱۸۵۰ متر",
      en: "Nyeri, Kenya · 1,850m elevation · SL28 & SL34",
      ar: "نييري، كينيا · ارتفاع ١٨٥٠ م",
    },
    prepTimeMinutes: 7,
    calories: 4,
    available: true,
  },
  {
    id: "chemex_ethiopia_floral",
    categoryId: "specialty_brew",
    name: {
      fa: "کمکس اتیوپی گوجی (دونفره)",
      en: "Chemex Ethiopia Guji (For Two)",
      ar: "كيمكس إثيوبيا غوجي (لشخصين)",
    },
    price: 240000,
    description: {
      fa: "سرو در ظرف شیشه‌ای کمکس، فیلتراسیون ضخیم برای فنجانی فوق‌العاده زلال با عطر یاسمن، هلو و عسل.",
      en: "Served in an elegant glass Chemex carafe. Exceptionally clean cup with jasmine florals, peach and honey.",
      ar: "يقدم في إبريق كيمكس زجاجي أنيق. فنجان نقي جداً بنكهة الخوخ والياسمين والعسل.",
    },
    tags: ["signature", "hot", "sugar_free", "arabica100"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    origin: {
      fa: "اتیوپی گوجی - طبیعی (Natural)",
      en: "Guji, Ethiopia · Natural Process",
      ar: "غوجي، إثيوبيا · معالجة طبيعية مجففة",
    },
    prepTimeMinutes: 9,
    calories: 8,
    available: true,
  },
  {
    id: "aeropress_colombia",
    categoryId: "specialty_brew",
    name: {
      fa: "ائروپرس کلمبیا هویلا",
      en: "AeroPress Colombia Huila",
      ar: "إيروبرس كولومبيا هويلا",
    },
    price: 155000,
    description: {
      fa: "عصاره‌گیری فشاری ملایم، بادی متوسط و غنی، نُت‌های بادام برشته، شکلات شیری و سیب سرخ.",
      en: "Full-immersion gentle pressure brew highlighting roasted almond, milk chocolate, and crisp red apple.",
      ar: "استخلاص غني بالضغط اللطيف يبرز نكهات اللوز المحمص والشوكولاتة بالحليب.",
    },
    tags: ["hot", "sugar_free", "arabica100"],
    prepTimeMinutes: 6,
    calories: 5,
    available: true,
  },

  // =================== COLD BAR ===================
  {
    id: "cold_brew_tonic_citrus",
    categoryId: "cold_bar",
    name: {
      fa: "کلدبرو تونیک مرکبات و رزماری",
      en: "Citrus & Rosemary Cold Brew Tonic",
      ar: "تونيك القهوة الباردة بالحمضيات وإكليل الجبل",
    },
    price: 185000,
    description: {
      fa: "قهوه سرددم ۱۸ ساعته چینو، تونیک پریمیوم، اسلایس گریپ‌فروت تازه و شاخه رزماری دودی شده.",
      en: "18-hour artisanal cold brew, premium tonic water, fresh pink grapefruit slice and torched rosemary sprig.",
      ar: "قهوة مقطرة باردة لمدة ١٨ ساعة مع ماء التونيك وشريحة الجريب فروت وإكليل الجبل المدخن.",
    },
    tags: ["signature", "popular", "cold", "sugar_free", "vegan"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    isCurated: true,
    curatedNote: {
      fa: "ترکیبی طراوت‌بخش از خنکای قهوه سرد و تلخی ظریف تونیک با عطر معطر رزماری.",
      en: "Refreshing collision of crisp cold coffee, effervescent tonic, and smoky herbaceous aroma.",
      ar: "مزيج منعش من القهوة الباردة والتونيك الفوار مع نفحات عطرية زكية.",
    },
    prepTimeMinutes: 4,
    calories: 45,
    available: true,
  },
  {
    id: "iced_pistachio_latte",
    categoryId: "cold_bar",
    name: {
      fa: "آیس لاته پسته تازه شاهرود",
      en: "Iced Shahroud Pistachio Latte",
      ar: "آيس لاتيه فستق شاهرود الطازج",
    },
    price: 195000,
    description: {
      fa: "کرم پسته دست‌ساز تهیه شده از باغات شاهرود، اسپرسوی دوگانه سرد و شیر غلیظ شده روی یخ قالبی شفاف.",
      en: "House pistachio paste from local Shahroud orchards, chilled double espresso, and creamy cold milk over crystal ice.",
      ar: "معجون فستق شاهرود الطبيعي مع جرعة إسبريسو مزدوجة وحليب بارد على قطع الثلج الكريستالي.",
    },
    tags: ["signature", "popular", "cold", "local_shahroud"],
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    origin: {
      fa: "پسته خندان تازه باغات شاهرود",
      en: "Fresh premium Shahroud pistachios",
      ar: "فستق طازج من مزارع شاهرود",
    },
    prepTimeMinutes: 5,
    calories: 260,
    available: true,
  },
  {
    id: "iced_spanish_latte",
    categoryId: "cold_bar",
    name: {
      fa: "آیس اسپنیش لاته",
      en: "Iced Spanish Latte",
      ar: "سبانش لاتيه مثلج",
    },
    price: 170000,
    description: {
      fa: "شیر عسلی غلیظ، اسپرسوی تلخ و لایه‌بندی چشم‌نواز با شیر تازه روی قطعات یخ خنک.",
      en: "Sweet condensed milk layered with rich espresso and cold textured milk over artisan ice cubes.",
      ar: "حليب مكثف محلى مع طبقات الإسبريسو الغنية والحليب الطازج البارد.",
    },
    tags: ["popular", "cold"],
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 4,
    calories: 230,
    available: true,
  },
  {
    id: "mocktail_damask_pomegranate",
    categoryId: "cold_bar",
    name: {
      fa: "موکتیل انار، گلاب و تخم شربتی",
      en: "Pomegranate, Rose & Chia Mocktail",
      ar: "موكتيل الرمان وماء الورد وبذور الريحان",
    },
    price: 150000,
    description: {
      fa: "آب انار طبیعی تازه، شربت گل سرخ کاشان، تخم شربتی خیسانده و سودای گازدار با لیموترش شیرازی.",
      en: "Pure fresh pomegranate juice, artisan Damask rose nectar, chia seeds, sparkling soda and lime zest.",
      ar: "عصير رمان طبيعي مع ماء الورد الكاشاني وبذور الشيا الفوارة مع الليمون.",
    },
    tags: ["cold", "vegan", "sugar_free"],
    prepTimeMinutes: 5,
    calories: 110,
    available: true,
  },

  // =================== HERBAL TRADITION ===================
  {
    id: "karak_saffron_tea",
    categoryId: "herbal_tradition",
    name: {
      fa: "چای کرک زعفرانی چینو (با هل و دارچین)",
      en: "Persian Saffron & Cardamom Karak",
      ar: "شاي كرك الزعفران والهيل من تشينو",
    },
    price: 135000,
    description: {
      fa: "جوشانده آرام چای سیاه آسام در شیر تازه با دانه هل کوهی شکسته، چوب دارچین، میخک و زعفران ناب سرگل.",
      en: "Slow-simmered Assam black tea infused with whole milk, crushed green cardamom pods, cinnamon, and pure saffron.",
      ar: "شاي أسود مطهو ببطء مع الحليب الطازج وحبوب الهيل الجبلي والقرفة والزعفران الخالص.",
    },
    tags: ["signature", "popular", "hot", "local_shahroud"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    isCurated: true,
    curatedNote: {
      fa: "نوشیدنی گرم، اصیل و آرامش‌بخش؛ یادآور شب‌های دل‌انگیز و دورهمی‌های صمیمی ایرانی.",
      en: "Comforting, warm and deeply aromatic; evokes the nostalgic warmth of Persian gatherings.",
      ar: "مشروب دافئ ومريح يعيد ذكريات المجالس الإيرانية الدافئة.",
    },
    prepTimeMinutes: 6,
    calories: 140,
    available: true,
  },
  {
    id: "herbal_borage_valerian",
    categoryId: "herbal_tradition",
    name: {
      fa: "دم‌نوش آرامش (گل‌گاوزبان، سنبل‌الطیب و لیمو عمانی)",
      en: "Serenity Infusion (Borage, Valerian & Dried Lime)",
      ar: "شاي الهدوء والسكينة (لسان الثور، الناردين والليمون المجفف)",
    },
    price: 120000,
    description: {
      fa: "برگ گل‌گاوزبان ارگانیک دامنه‌های شاهوار شاهرود، ریشه سنبل‌الطیب و پره لیمو عمانی؛ سرو در قوری شیشه‌ای پیرکس با نبات زعفرانی.",
      en: "Wild mountain borage harvested from Shahvar peaks, valerian root, and black dried lime. Served in glass teapot with saffron rock candy.",
      ar: "أزهار لسان الثور من جبال شاهوار مع الناردين والليمون الأسود في إبريق زجاجي مع سكر نبات الزعفران.",
    },
    tags: ["hot", "vegan", "sugar_free", "local_shahroud"],
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    origin: {
      fa: "دامنه کوه شاهوار شاهرود",
      en: "Shahvar Mountain Range, Shahroud",
      ar: "مرتفعات جبل شاهوار، شاهرود",
    },
    prepTimeMinutes: 8,
    calories: 5,
    available: true,
  },
  {
    id: "sour_cherry_sekangabin",
    categoryId: "herbal_tradition",
    name: {
      fa: "شربت سکنجبین خیار و آلبالوی بسطام",
      en: "Bastam Sour Cherry & Cucumber Sekanjabin",
      ar: "مشروب السكنجبين مع الخيار وكرز بسطام الحامض",
    },
    price: 125000,
    description: {
      fa: "شربت نعنا و سرکه‌انگبین طبیعی، خلال خیار بومی معطر، میوه آلبالوی باغات بسطام شاهرود و یخ سنتی تراشیده.",
      en: "Traditional honey-mint Sekanjabin vinegar cordial, ribboned local cucumber, fresh Bastam sour cherries and crushed ice.",
      ar: "شراب النعناع والخل التراثي مع شرائح الخيار وكرز بسطام الطازج والثلج المجروش.",
    },
    tags: ["cold", "popular", "local_shahroud", "vegan"],
    prepTimeMinutes: 5,
    calories: 95,
    available: true,
  },

  // =================== BREAKFAST & BRUNCH ===================
  {
    id: "persian_heritage_breakfast",
    categoryId: "breakfast_brunch",
    name: {
      fa: "سینی صبحانه اصیل چینو",
      en: "Chino Heritage Breakfast Platter",
      ar: "صينية فطور تشينو التراثية",
    },
    price: 290000,
    description: {
      fa: "پنیر تبریز کهنه، کره محلی شاهرود، گردوی تازه، مربای بهارنارنج و بالنگ، عسل سبلان، زیتون پرورده، گوجه و خیار بوته‌ای با نان سنگک تازه داغ و چای لاهیجان.",
      en: "Aged Tabriz sheep cheese, local Shahroud butter, fresh walnuts, sour orange blossom preserves, Sabalan honeycomb, herbs, hot Sangak bread and Lahijan black tea.",
      ar: "جبن تبريز العتيق، زبدة شاهرودية، جوز طازج، مربى زهر البرتقال، عسل طبيعي وخبز سنكك ساخن مع الشاي.",
    },
    tags: ["signature", "popular", "local_shahroud", "breakfast"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 12,
    calories: 580,
    available: true,
  },
  {
    id: "avocado_poached_egg_toast",
    categoryId: "breakfast_brunch",
    name: {
      fa: "تست آووکادو با تخم‌مرغ پوچد و دانه چیا",
      en: "Avocado & Poached Egg Sourdough",
      ar: "توست الأفوكادو مع البيض المسلوق وبذور الشيا",
    },
    price: 260000,
    description: {
      fa: "نان ساوردو جو برشته چینو، گواکاموله دست‌ساز لیمویی، تخم‌مرغ عسلی، گوجه گیلاسی کاراملی و پرک فلفل چیلی.",
      en: "Toasted artisan sourdough, seasoned mashed avocado, two organic poached eggs, blistered cherry tomatoes, and microgreens.",
      ar: "خبز العجين المخمر مع الأفوكادو المتبل، بيضتان مسلوقتان بصفار سائل، طماطم كرزية وأعشاب طازجة.",
    },
    tags: ["popular", "breakfast"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 10,
    calories: 420,
    available: true,
  },
  {
    id: "traditional_shapour_omelette",
    categoryId: "breakfast_brunch",
    name: {
      fa: "املت شاپوری مخصوص (لوبیا و تخم‌مرغ گیلکی)",
      en: "Shapouri Heritage Omelette",
      ar: "أومليت شابوري التراثي (فاصوليا وبيض)",
    },
    price: 180000,
    description: {
      fa: "خوراک لوبیای چیتی لعاب‌دار دست‌پخت، تخم‌مرغ نیمرو با کره حیوانی، پیازچه و فلفل سیاه با نان تازه و لیمو ترش.",
      en: "Slow-cooked savory pinto bean ragù topped with sunny-side-up fried eggs in browned butter, spring onions, fresh lemon and bread.",
      ar: "فاصوليا مطهوة ببطء مع بيض عيون بالزبدة البلدية، بصل أخضر وليمون طازج.",
    },
    tags: ["hot", "popular", "breakfast"],
    prepTimeMinutes: 8,
    calories: 460,
    available: true,
  },

  // =================== SIGNATURE & LIGHT FARE ===================
  {
    id: "smoked_turkey_pesto_panini",
    categoryId: "main_plates",
    name: {
      fa: "پنینی فیله بوقلمون دودی و پستوی ریحان",
      en: "Smoked Turkey & Basil Pesto Panini",
      ar: "بانيني الحبش المدخن وصوص البيستو بالريحان",
    },
    price: 285000,
    description: {
      fa: "نان فوکاچیای رزماری دست‌ساز، برش‌های سینه بوقلمون دودی چوبی، پنیر موتزارلای تازه آب‌شده، گوجه خشک آفتابی و پستوی ریحان ایتالیایی.",
      en: "House rosemary focaccia, wood-smoked turkey breast, melted fresh mozzarella, sun-dried tomatoes, and basil pine nut pesto.",
      ar: "خبز فوكاتشا منزلي بالروزماري مع صدر الحبش المدخن، جبن موزاريلا ذائب، طماطم مجففة وبيستو الريحان.",
    },
    tags: ["signature", "popular", "hot"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    isCurated: true,
    curatedNote: {
      fa: "پخت نان روزانه در تنور چینو و لایه‌های غنی پنیر و بوقلمون گریل شده با عطر ریحان تازه.",
      en: "Freshly baked daily focaccia with warm melted mozzarella and aromatic house pesto.",
      ar: "خبز طازج يومياً مع الموزاريلا الذائبة وصوص البيستو العطري اللذيذ.",
    },
    prepTimeMinutes: 12,
    calories: 520,
    available: true,
  },
  {
    id: "truffle_wild_mushroom_fettuccine",
    categoryId: "main_plates",
    name: {
      fa: "فتوچینی دست‌ساز با قارچ وحشی و سس ترافل",
      en: "Handmade Wild Mushroom & Truffle Fettuccine",
      ar: "فيتوتشيني طازجة بفطر الغابات وصلصة الترفل",
    },
    price: 340000,
    description: {
      fa: "پاستای تخم‌مرغی تازه، ترکیب قارچ‌های جنگلی، سس خامه و پارمزان ۲۴ ماهه، روغن ترافل سیاه و جعفری ساطوری.",
      en: "Fresh egg pasta ribbons, sautéed wild woodland mushrooms, 24-month aged Parmigiano Reggiano cream, black truffle essence.",
      ar: "باستا طازجة مع تشكيلة فطر الغابات، كريمة البارميزان المعتق ٢٤ شهراً وزيت الترفل الأسود.",
    },
    tags: ["signature", "hot"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 15,
    calories: 610,
    available: true,
  },
  {
    id: "chino_garden_salad",
    categoryId: "main_plates",
    name: {
      fa: "سالاد باغ سبز چینو با خلال بادام و انار",
      en: "Chino Green Orchard Salad",
      ar: "سلطة بستان تشينو الخضراء باللوز والرمان",
    },
    price: 210000,
    description: {
      fa: "میکروگرین‌ها و بیبی اسفناج، دانه‌های یاقوتی انار، پرک بادام برشته شاهرود، پنیر فتا ارگانیک و دره‌سینگ سرکه بالزامیک کهنه و رب انار خانگی.",
      en: "Baby spinach & crisp microgreens, ruby pomegranate seeds, toasted Shahroud sliced almonds, feta crumbles, aged balsamic-pomegranate glaze.",
      ar: "أوراق السبانخ الصغيرة مع حبات الرمان، شرائح اللوز المحمص، جبن الفيتا وصلصة دبس الرمان المعتق.",
    },
    tags: ["vegan", "local_shahroud", "popular"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 8,
    calories: 280,
    available: true,
  },

  // =================== PASTRIES & DESSERTS ===================
  {
    id: "shahroud_pistachio_cheesecake",
    categoryId: "pastry_dessert",
    name: {
      fa: "چیزکیک پسته و گلاب شاهرود (امضای قنادی چینو)",
      en: "Shahroud Pistachio & Rose Cheesecake",
      ar: "تشيزكيك الفستق وماء الورد من شاهرود",
    },
    price: 215000,
    description: {
      fa: "پایه بیسکوئیت هل و کره، کرم‌چیز خامه غلیظ با پوره پسته تازه شاهرود، قطره‌های شهد گل سرخ و خلال پسته دوآتیشه.",
      en: "Cardamom-spiced biscuit crust, velvety cream cheese blended with Shahroud pure pistachio paste, Damask rose glaze and crushed pistachios.",
      ar: "قاعدة بسكويت الهيل والزبدة مع طبقة تشيزكيك غنية بمعجون فستق شاهرود وشهد الورد.",
    },
    tags: ["signature", "popular", "local_shahroud"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    isCurated: true,
    curatedNote: {
      fa: "شاهکار قنادی چینو؛ تهیه شده با باکیفیت‌ترین پسته سبز شاهرود و عطر گلاب ناب.",
      en: "The crown jewel of Chino's pastry kitchen; crafted with Shahroud's finest green pistachios.",
      ar: "تحفة حلويات تشينو؛ معدة من أجود أنواع الفستق الأخضر وماء الورد النقي.",
    },
    prepTimeMinutes: 3,
    calories: 380,
    available: true,
  },
  {
    id: "san_sebastian_cheesecake",
    categoryId: "pastry_dessert",
    name: {
      fa: "چیزکیک سن سباستین با سس شکلات بلژیکی گرم",
      en: "San Sebastian Cheesecake with Warm Belgian Chocolate",
      ar: "سان سيباستيان تشيزكيك مع صوص الشوكولاتة البلجيكية",
    },
    price: 195000,
    description: {
      fa: "بافت لطیف و ابریشمی با رویه برشته کاراملی، سرو همراه با شات سس شکلات تلخ ۶۴٪ کالبوت بلژیک.",
      en: "Burnt Basque-style cheesecake with a melting creamy core, served alongside a warm shot of 64% Callebaut dark chocolate.",
      ar: "تشيزكيك باسكي مكرمل بقوام كريمي ذائب يقدم مع صلصة الشوكولاتة البلجيكية الدافئة.",
    },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 3,
    calories: 420,
    available: true,
  },
  {
    id: "croissant_almond_frangipane",
    categoryId: "pastry_dessert",
    name: {
      fa: "کروسان فرانسوی بادام و فرانجی‌پان",
      en: "Almond Frangipane Butter Croissant",
      ar: "كرواسون اللوز والفرانجيبان بالزبدة الفرنسية",
    },
    price: 160000,
    description: {
      fa: "خمیر کره‌ای هزارلا با پخت روزانه، مغز کرم بادام و وانیل، پوشیده با پرک بادام برشته و پودر قند.",
      en: "Laminated flaky butter croissant filled with almond frangipane cream, topped with toasted sliced almonds.",
      ar: "كرواسون هش ومورق بالزبدة الطبيعية محشو بكريمة اللوز ومغطى بشرائح اللوز المحمص.",
    },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    prepTimeMinutes: 2,
    calories: 340,
    available: true,
  },
];
