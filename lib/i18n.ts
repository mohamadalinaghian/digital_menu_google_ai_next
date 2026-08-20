import { Language } from "@/types/menu";

export interface TranslationDict {
  brandName: string;
  brandTagline: string;
  cafeRestaurant: string;
  curatedTitle: string;
  curatedSubtitle: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  allCategories: string;
  filterByTag: string;
  allTags: string;
  clearFilter: string;
  noResultsTitle: string;
  noResultsDesc: string;
  resetSearch: string;
  viewModePhoto: string;
  viewModeEditorial: string;
  photoModeTooltip: string;
  editorialModeTooltip: string;
  price: string;
  ingredients: string;
  origin: string;
  allergens: string;
  prepTime: string;
  minutes: string;
  calories: string;
  close: string;
  orderNotice: string;
  hours: string;
  openNow: string;
  closedNow: string;
  address: string;
  wifi: string;
  wifiPassword: string;
  copiedWifi: string;
  copyWifi: string;
  phone: string;
  call: string;
  instagram: string;
  shahroudIran: string;
  menuSections: string;
  itemsCount: string;
  item: string;
  shareMenu: string;
  copiedLink: string;
  customizationPreview: string;
  customizationNotice: string;
}

export const translations: Record<Language, TranslationDict> = {
  fa: {
    brandName: "چینو",
    brandTagline: "کافه و رستوران اصیل",
    cafeRestaurant: "کافه · رستوران چینو",
    curatedTitle: "پیشنهاد چینو",
    curatedSubtitle: "دست‌چین گزیده‌ای از طعم‌های شاخص و امضای باریستا برای امروز",
    searchPlaceholder: "جستجو در میان نوشیدنی‌ها، دسرها و غذاها...",
    searchAriaLabel: "جستجوی منو",
    allCategories: "همه بخش‌ها",
    filterByTag: "فیلتر ویژگی‌ها",
    allTags: "همه",
    clearFilter: "پاک کردن فیلتر",
    noResultsTitle: "موردی یافت نشد",
    noResultsDesc: "هیچ آیتمی با عبارت یا فیلتر انتخابی شما همخوانی نداشت.",
    resetSearch: "مشاهده تمام منو",
    viewModePhoto: "نمای تصویری",
    viewModeEditorial: "نمای ژورنالی",
    photoModeTooltip: "نمایش منو همراه با تصاویر عکاسی شده",
    editorialModeTooltip: "نمای خوانش مینیمال و سریع متنی",
    price: "قیمت",
    ingredients: "ترکیبات و طعم‌یادها",
    origin: "خاستگاه و مشخصات",
    allergens: "حساسیت‌زاها",
    prepTime: "زمان آماده‌سازی تقریبی",
    minutes: "دقیقه",
    calories: "کالری تقریبی",
    close: "بستن",
    orderNotice: "برای سفارش، لطفاً میزبانتان را مطلع فرمایید.",
    hours: "ساعات پذیرایی",
    openNow: "هم‌اکنون باز است",
    closedNow: "ساعات پذیرایی: ۸:۳۰ الی ۲۳:۳۰",
    address: "شاهرود، خیابان فردوسی، نبش کوچه یاس",
    wifi: "اینترنت وای‌فای مهمان",
    wifiPassword: "رمز عبور",
    copiedWifi: "رمز وای‌فای کپی شد",
    copyWifi: "کپی رمز",
    phone: "تماس و رزرو",
    call: "برقراری تماس",
    instagram: "صفحه اینستاگرام چینو",
    shahroudIran: "شاهرود، ایران",
    menuSections: "بخش‌های منو",
    itemsCount: "آیتم",
    item: "مورد",
    shareMenu: "اشتراک‌گذاری منو",
    copiedLink: "لینک منو کپی شد",
    customizationPreview: "سفارشی‌سازی (به‌زودی در نسخه سفارش آنلاین)",
    customizationNotice: "امکان انتخاب نوع شیر، درجه شیرینی و حجم در سفارش حضوری به باریستا قابل اعلام است.",
  },
  en: {
    brandName: "CHINO",
    brandTagline: "Refined Café & Restaurant",
    cafeRestaurant: "Chino Café · Restaurant",
    curatedTitle: "Chino's Curated Selection",
    curatedSubtitle: "Hand-picked signatures and seasonal favorites for your moments",
    searchPlaceholder: "Search beverages, pastries, dishes...",
    searchAriaLabel: "Search menu",
    allCategories: "All Sections",
    filterByTag: "Filter by trait",
    allTags: "All",
    clearFilter: "Clear filters",
    noResultsTitle: "No matches found",
    noResultsDesc: "No menu items match your search term or active filters.",
    resetSearch: "Show full menu",
    viewModePhoto: "Visual View",
    viewModeEditorial: "Editorial View",
    photoModeTooltip: "Show menu with photography",
    editorialModeTooltip: "Minimal fast-reading typographic layout",
    price: "Price",
    ingredients: "Ingredients & Flavor Notes",
    origin: "Origin & Notes",
    allergens: "Allergens",
    prepTime: "Approx. Prep Time",
    minutes: "mins",
    calories: "Est. Calories",
    close: "Close",
    orderNotice: "To place your order, please inform your table host.",
    hours: "Opening Hours",
    openNow: "Open Now",
    closedNow: "Hours: 8:30 AM – 11:30 PM",
    address: "Ferdowsi Ave, Corner of Yas Alley, Shahroud",
    wifi: "Guest Wi-Fi",
    wifiPassword: "Password",
    copiedWifi: "Wi-Fi password copied",
    copyWifi: "Copy password",
    phone: "Contact & Reservation",
    call: "Call Us",
    instagram: "Chino Instagram",
    shahroudIran: "Shahroud, Iran",
    menuSections: "Menu Categories",
    itemsCount: "items",
    item: "item",
    shareMenu: "Share Menu",
    copiedLink: "Menu link copied",
    customizationPreview: "Customization (Coming soon for digital ordering)",
    customizationNotice: "Milk alternatives, sweetness level, and espresso shot adjustments can be requested to your barista.",
  },
  ar: {
    brandName: "تشينو",
    brandTagline: "مقهى ومطعم راقٍ",
    cafeRestaurant: "مقهى ومطعم تشينو",
    curatedTitle: "مختارات تشينو",
    curatedSubtitle: "مجموعة مختارة من أشهى النكهات وتوقيع الباريستا لليوم",
    searchPlaceholder: "البحث في المشروبات والحلويات والمأكولات...",
    searchAriaLabel: "البحث في القائمة",
    allCategories: "كل الأقسام",
    filterByTag: "تصفية حسب الخصائص",
    allTags: "الكل",
    clearFilter: "إلغاء التصفية",
    noResultsTitle: "لم يتم العثور على نتائج",
    noResultsDesc: "لا توجد عناصر تطابق بحثك أو الفلاتر المحددة.",
    resetSearch: "عرض القائمة كاملة",
    viewModePhoto: "العرض المصور",
    viewModeEditorial: "العرض التحريري",
    photoModeTooltip: "عرض القائمة مع الصور الفوتوغرافية",
    editorialModeTooltip: "عرض نصي أنيق وسريع القراءة",
    price: "السعر",
    ingredients: "المكونات ونغمات النكهة",
    origin: "المنشأ والملاحظات",
    allergens: "مسببات الحساسية",
    prepTime: "وقت التحضير التقريبي",
    minutes: "دقيقة",
    calories: "السعرات التقديرية",
    close: "إغلاق",
    orderNotice: "للطلب، يرجى إبلاغ مضيف الطاولة.",
    hours: "ساعات العمل",
    openNow: "مفتوح الآن",
    closedNow: "ساعات الاستقبال: ٨:٣٠ ص – ١١:٣۰ م",
    address: "شاهرود، شارع فردوسي، زاوية زقاق ياس",
    wifi: "واي فاي الضيوف",
    wifiPassword: "كلمة المرور",
    copiedWifi: "تم نسخ كلمة مرور الواي فاي",
    copyWifi: "نسخ الكلمة",
    phone: "الاتصال والحجز",
    call: "إجراء مكالمة",
    instagram: "صفحة إنستغرام تشينو",
    shahroudIran: "شاهرود، إيران",
    menuSections: "أقسام القائمة",
    itemsCount: "عنصر",
    item: "عنصر",
    shareMenu: "مشاركة القائمة",
    copiedLink: "تم نسخ الرابط",
    customizationPreview: "التخصيص (قريباً في ميزة الطلب الإلكتروني)",
    customizationNotice: "يمكن طلب تعديل نوع الحليب أو نسبة السكر مباشرة من الباريستا.",
  },
};
