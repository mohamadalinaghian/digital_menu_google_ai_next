# DEMO CONTENT INVENTORY — CHINO CAFÉ-RESTAURANT (چینو)

This document provides a comprehensive audit of all placeholder, mock, and prototype content created during the design phase of the Chino digital menu.

---

## 1. Summary of Architecture & Data Separation

All mock data has been quarantined to `/data/demo/demo-menu.ts`.
The production application imports from `/data/menu.ts`, which serves as the **Single Source of Truth**.

| Data Type | Production File | Demo / Prototype File | Status |
| :--- | :--- | :--- | :--- |
| **Menu Items & Prices** | `/data/menu.ts` (`productionProductsData`) | `/data/demo/demo-menu.ts` (`demoProductsData`) | **Isolated** |
| **Menu Categories** | `/data/menu.ts` (`productionCategoriesData`) | `/data/demo/demo-menu.ts` (`demoCategoriesData`) | **Standardized** |
| **Dietary & Trait Tags** | `/data/menu.ts` (`productionTagsData`) | `/data/demo/demo-menu.ts` (`demoTagsData`) | **Standardized** |
| **Venue Details (WiFi, Hours, Tel)** | `/data/menu.ts` (`productionVenueInfo`) | `/data/demo/demo-menu.ts` (`demoVenueInfo`) | **Cleaned & Parameterized** |
| **Structured Data (JSON-LD SEO)** | `/components/StructuredData.tsx` | N/A (Dynamically references `/data/menu.ts`) | **Dynamic** |

---

## 2. Inventory of Demo Data Items

### A. Demo Products & Pricing (Located in `/data/demo/demo-menu.ts`)

| Item ID | Persian Name | English Name | Mock Price | Mock Image URL | Notes / Origin Claim |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `chino_saffron_macchiato` | اسپرسو ماکیاتو زعفرانی چینو | Chino Saffron Macchiato | 145,000 T | Unsplash (Macchiato) | Ethiopia Yirgacheffe + Qayen Saffron |
| `karak_saffron_tea` | چای کرک زعفرانی چینو | Chino Saffron Karak Tea | 135,000 T | Unsplash (Karak) | House spice blend + Lahijan tea |
| `shahroud_pistachio_cheesecake` | چیزکیک پسته و گلاب شاهرود | Shahroud Pistachio Cheesecake | 185,000 T | Unsplash (Cheesecake) | Shahroud pistachio + Rosewater |
| `espresso_double` | اسپرسو دبل شات | Double Espresso | 95,000 T | N/A (Editorial text) | Colombia Villa Buena + Brazil Santos |
| `shahroud_breakfast_platter` | سینی صبحانه اصیل چینو | Chino Traditional Breakfast Platter | 240,000 T | Unsplash (Platter) | Local farm eggs + Shahroud walnuts |

### B. Venue Information Placeholders (Located in `/data/menu.ts` and `/data/demo/demo-menu.ts`)

| Field | Demo / Mock Value | Production Default | Real Replacement Needed |
| :--- | :--- | :--- | :--- |
| **Phone Number** | `02332345678` | `02332345678` | Real Chino landline / mobile |
| **Physical Address** | `شاهرود، خیابان فردوسی، نبش کوچه یاس` | `شاهرود، خیابان فردوسی، نبش کوچه یاس` | Exact Chino street address |
| **Operating Hours** | `همه روزه از ۸:۳۰ صبح تا ۲۳:۳۰ شب` | `همه‌روزه از ۸:۳۰ الی ۲۳:۳۰` | Real operating hours |
| **Guest Wi-Fi SSID** | `Chino_Guest_5G` | `Chino_Guest` | Actual in-venue Wi-Fi network name |
| **Guest Wi-Fi Password** | `chino-shahroud` | `""` (Empty by default) | Actual in-venue Wi-Fi password |
| **Instagram Handle** | `chino.cafe` | `chino.cafe` | Official Instagram username |
| **Google Maps URL** | `https://maps.google.com/?q=Shahroud` | `""` (Empty by default) | Exact Google Maps place link |

---

## 3. UI Text & Localization Dictionary (Located in `/lib/i18n.ts`)

All UI strings (buttons, headers, aria labels, directions, hospitality phrases) are real, respectful Persian, English, and Arabic translations and are safe for production.

---

## 4. Controlled Demo Mode Activation

To preview prototype menu items during UI testing:
```bash
# In your .env.local file:
NEXT_PUBLIC_USE_DEMO_DATA=true
```
In production, leave this unset or set to `false`. When `NEXT_PUBLIC_USE_DEMO_DATA=false`, the application will **only** read from `productionProductsData` and will **never** display prototype items.
