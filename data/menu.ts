import { Category, Product, Tag, VenueInfo } from '@/types/menu';
import {
  demoCategoriesData,
  demoProductsData,
  demoTagsData,
  demoVenueInfo,
} from './demo/demo-menu';

/**
 * ============================================================================
 * CHINO CAFÉ-RESTAURANT — SINGLE SOURCE OF TRUTH FOR MENU DATA
 * ============================================================================
 * 
 * PRODUCTION DATA INSTRUCTIONS:
 * 1. Replace the items in `productionProductsData` with your real Chino menu items.
 * 2. Update `productionVenueInfo` with your actual phone, address, and hours.
 * 3. Verify `productionCategoriesData` matches your in-house menu categories.
 * 
 * DEMO MODE:
 * Set `NEXT_PUBLIC_USE_DEMO_DATA=true` in your environment (.env.local) to preview
 * the showcase prototype dataset during development or UI testing.
 * By default in production, DEMO DATA IS DISABLED.
 * ============================================================================
 */

export const USE_DEMO_DATA: boolean =
  process.env.NEXT_PUBLIC_USE_DEMO_DATA === 'true';

// ============================================================================
// 1. PRODUCTION RESTAURANT & VENUE INFO
// ============================================================================
export const productionVenueInfo: VenueInfo = {
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
    fa: 'تجربه‌ای آرام از طعم‌های اصیل، قهوه‌های برگزیده، دم‌نوش‌های ناب و دست‌پخت‌های تازه در شاهرود.',
    en: 'A serene space for specialty coffee, refined infusions, and artisanal cuisine in Shahroud.',
    ar: 'تجربة هادئة من النكهات الأصيلة والقهوة التخصصية والمأكولات الطازجة في شاهرود.',
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
    fa: 'همه‌روزه از ۸:۳۰ الی ۲۳:۳۰',
    en: 'Daily from 8:30 AM to 11:30 PM',
    ar: 'يومياً من ٨:٣٠ صباحاً حتى ١١:٣٠ مساءً',
  },
  phone: '02332345678',
  wifiSsid: 'Chino_Guest',
  wifiPassword: '',
  instagram: 'chino.cafe',
  googleMapsUrl: '',
};

// ============================================================================
// 2. PRODUCTION MENU CATEGORIES
// ============================================================================
export const productionCategoriesData: Category[] = [
  {
    id: 'espresso_bar',
    title: { fa: 'اسپرسو بار', en: 'Espresso Bar', ar: 'بار الإسبريسو' },
    subtitle: {
      fa: 'عصاره‌گیری دقیق از دانه‌های تازه‌برشت تخصصی',
      en: 'Precision extraction with fresh-roasted coffee',
      ar: 'استخلاص دقيق من حبوب طازجة التحميص',
    },
  },
  {
    id: 'pourover_specialty',
    title: { fa: 'قهوه‌های دمی و تخصصی', en: 'Specialty Brews', ar: 'القهوة المقطرة والتخصصية' },
    subtitle: {
      fa: 'متدهای V60، کمکس و ائروپرس',
      en: 'Manual pour-overs and filter coffees',
      ar: 'طرق التقطير اليدوي',
    },
  },
  {
    id: 'cold_beverages',
    title: { fa: 'نوشیدنی‌های سرد و کوکتل‌بار', en: 'Cold Drinks & Mocktails', ar: 'المشروبات الباردة والكوكتيلات' },
    subtitle: {
      fa: 'سرددم‌ها، شربت‌های گیاهی و کوکتل‌های امضای چینو',
      en: 'Cold brews, house coolers, and signature iced drinks',
      ar: 'مشروبات باردة منعشة وخلطات خاصة',
    },
  },
  {
    id: 'botanical_teas',
    title: { fa: 'دم‌نوش‌های بومی و چای‌های خاص', en: 'Artisanal Teas & Infusions', ar: 'الشاي الفاخر والمشروبات العشبية' },
    subtitle: {
      fa: 'چای اصیل ایرانی و دم‌نوش‌های گیاهی آرامش‌بخش',
      en: 'Persian teas and regional botanical infusions',
      ar: 'شاي إيراني أصيل ومشروبات عشبية',
    },
  },
  {
    id: 'pastries_desserts',
    title: { fa: 'دسرها و شیرینی‌های تازه', en: 'Pastries & Desserts', ar: 'الحلويات والمخبوزات الطازجة' },
    subtitle: {
      fa: 'پخت روزانه در کارگاه قنادی با مواد اولیه باکیفیت',
      en: 'Baked daily with premium ingredients',
      ar: 'مخبوزات وحلويات يومية طازجة',
    },
  },
  {
    id: 'breakfast_brunch',
    title: { fa: 'صبحانه و برانچ', en: 'Breakfast & Brunch', ar: 'الفطور والبرانش' },
    subtitle: {
      fa: 'سرو صبحانه کامل و نان تازه',
      en: 'Fresh morning plates and warm bread',
      ar: 'وجبات إفطار طازجة مع الخبز الساخن',
    },
  },
  {
    id: 'savory_plates',
    title: { fa: 'غذاها و بشقاب‌های گرم', en: 'Savory Plates & Mains', ar: 'الأطباق الرئيسية والمقبلات' },
    subtitle: {
      fa: 'پنینی‌های ترد، پاستاها و سالادهای فصلی سالم',
      en: 'Toasted paninis, handmade pasta, and fresh salads',
      ar: 'بانيني مقرمش وباستا وسلطات طازجة',
    },
  },
];

// ============================================================================
// 3. PRODUCTION TAGS (For dietary & trait filtering)
// ============================================================================
export const productionTagsData: Tag[] = [
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

// ============================================================================
// 4. PRODUCTION PRODUCTS DATA
// ============================================================================
/**
 * Add your real Chino products here.
 * Required fields: `id`, `categoryId`, `name`, `price`.
 * All other fields (`description`, `tags`, `image`, `origin`, `prepTimeMinutes`, etc.) are completely optional.
 */
export const productionProductsData: Product[] = [
  // When deploying to production, populate this array with your real menu items.
  // Example template:
  // {
  //   id: 'chino_espresso',
  //   categoryId: 'espresso_bar',
  //   name: { fa: 'اسپرسو', en: 'Espresso', ar: 'إسبريسو' },
  //   price: 85000,
  //   description: { fa: 'عصاره‌گیری استاندارد دبل شات', en: 'Standard double shot extraction', ar: 'إسبريسو مزدوج' },
  //   tags: ['hot', 'arabica100'],
  //   available: true,
  // },
];

// ============================================================================
// 5. EXPORTED SINGLE SOURCE OF TRUTH (Switches between Real & Demo seamlessly)
// ============================================================================
export const venueInfo: VenueInfo = USE_DEMO_DATA
  ? demoVenueInfo
  : productionVenueInfo;

export const categoriesData: Category[] = USE_DEMO_DATA
  ? demoCategoriesData
  : productionCategoriesData;

export const tagsData: Tag[] = USE_DEMO_DATA
  ? demoTagsData
  : productionTagsData;

/**
 * Returns products based on explicit configuration.
 * In production (default), ONLY productionProductsData is used.
 * There is ZERO silent fallback to demo products.
 */
export const productsData: Product[] = USE_DEMO_DATA
  ? demoProductsData
  : productionProductsData;
