export type Language = 'fa' | 'en' | 'ar';

export type TagId =
  | 'signature'
  | 'popular'
  | 'new'
  | 'hot'
  | 'cold'
  | 'vegan'
  | 'sugar_free'
  | 'lactose_free'
  | 'local_shahroud'
  | 'arabica100'
  | 'breakfast';

export interface LocalizedString {
  fa: string;
  en: string;
  ar: string;
}

export interface Tag {
  id: TagId;
  label: LocalizedString;
  variant?: 'gold' | 'default' | 'emerald' | 'amber' | 'ruby';
}

export interface ProductOption {
  id: string;
  name: LocalizedString;
  priceDelta?: number; // In Tomans (for future ordering)
  isDefault?: boolean;
}

export interface ProductOptionGroup {
  id: string;
  title: LocalizedString;
  required?: boolean;
  options: ProductOption[];
}

export interface Product {
  id: string;
  categoryId: string;
  name: LocalizedString;
  price: number; // Price in Iranian Tomans (e.g. 145000 = 145,000 Tomans)
  description?: LocalizedString;
  tags?: TagId[];
  image?: string;
  imageAlt?: LocalizedString;
  isCurated?: boolean; // For "پیشنهاد چینو" section
  curatedNote?: LocalizedString;
  origin?: LocalizedString; // e.g., "Single Origin Ethiopia Yirgacheffe" or "پسته اعلای شاهرود"
  allergens?: LocalizedString[];
  prepTimeMinutes?: number;
  calories?: number;
  available?: boolean;
  // Future ordering preparation
  customizationGroups?: ProductOptionGroup[];
}

export interface Category {
  id: string;
  title: LocalizedString;
  subtitle?: LocalizedString;
  iconName?: string; // Lucide icon identifier
  featuredImage?: string;
}

export interface VenueInfo {
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  city: LocalizedString;
  address: LocalizedString;
  hours: LocalizedString;
  phone: string;
  wifiSsid: string;
  wifiPassword?: string;
  instagram: string;
  googleMapsUrl?: string;
}
