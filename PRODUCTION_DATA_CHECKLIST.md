# PRODUCTION DATA MIGRATION CHECKLIST — CHINO CAFÉ-RESTAURANT

Follow this step-by-step checklist to prepare and deploy your real menu data for Chino Café-Restaurant (چینو), Shahroud.

---

## Step 1: Update Restaurant & Venue Details

Open `/data/menu.ts` and modify the `productionVenueInfo` object:

- [ ] **Name & Tagline**: Verify Persian, English, and Arabic names and taglines.
- [ ] **Address**: Enter exact street address in Shahroud (`address.fa`, `address.en`, `address.ar`).
- [ ] **Operating Hours**: Enter actual opening and closing times (`hours.fa`, `hours.en`, `hours.ar`).
- [ ] **Telephone**: Enter your real landline or reservation phone number (e.g. `0233...`).
- [ ] **Wi-Fi Details**: Enter the in-store guest SSID and password (`wifiSsid`, `wifiPassword`). If guest Wi-Fi is not provided, leave `wifiPassword: ""`.
- [ ] **Instagram**: Enter the official Instagram handle (e.g. `chino.cafe`).
- [ ] **Google Maps Link**: Paste the exact Google Maps / Neshan / Balad location URL into `googleMapsUrl`.

---

## Step 2: Confirm Menu Categories

In `/data/menu.ts`, review `productionCategoriesData`:

- [ ] `espresso_bar`: Espresso-based drinks
- [ ] `pourover_specialty`: Manual brews (V60, Chemex, Aeropress)
- [ ] `cold_beverages`: Iced coffees, mocktails, botanical coolers
- [ ] `botanical_teas`: Teas and herbal infusions
- [ ] `pastries_desserts`: Cakes, pastries, baked goods
- [ ] `breakfast_brunch`: Breakfast items
- [ ] `savory_plates`: Sandwiches, paninis, pasta, salads

*(You can add, rename, reorder, or delete categories as needed. Items will automatically group under their assigned `categoryId`.)*

---

## Step 3: Populate Real Menu Products

In `/data/menu.ts`, add your real products to the `productionProductsData` array.

### Product Data Schema

```typescript
{
  id: string;              // REQUIRED: Unique lowercase slug, e.g. 'chino_latte'
  categoryId: string;      // REQUIRED: Matches one of your category IDs
  name: {                  // REQUIRED: Multilingual name
    fa: string;            // Persian (Mandatory)
    en: string;            // English (Recommended)
    ar?: string;           // Arabic (Optional)
  };
  price: number;           // REQUIRED: Price in Tomans (IRR / 10)
  
  // ALL FIELDS BELOW ARE OPTIONAL:
  description?: {
    fa: string;
    en?: string;
    ar?: string;
  };
  tags?: TagId[];          // e.g. ['signature', 'hot', 'arabica100', 'vegan', 'sugar_free']
  image?: string;          // Full URL or local path (/public/...)
  imageAlt?: { fa: string; en?: string; ar?: string };
  origin?: { fa: string; en?: string; ar?: string }; // Terroir / roaster / bean origin
  prepTimeMinutes?: number;// Prep time (highlighted only if > 10 min)
  calories?: number;       // Nutritional info in kcal
  allergens?: { fa: string; en?: string; ar?: string }[];
  isCurated?: boolean;     // Set to `true` to showcase in top curated carousel (max 3)
  curatedNote?: { fa: string; en?: string; ar?: string }; // Editorial tasting note
  available?: boolean;     // Defaults to true; set false if 86'd / sold out
}
```

### Tips for Product Data:
- If a product does **not** have a photo, simply omit `image`. The menu will automatically format it in clean, high-contrast typography.
- If a product has no description, simply omit `description`. The layout handles it cleanly.
- Set `isCurated: true` on 2–3 house specialties to highlight them at the top of the menu.

---

## Step 4: Verify Environment Configuration

- [ ] Check `.env.local` or deployment environment variables:
  - Ensure `NEXT_PUBLIC_USE_DEMO_DATA` is **NOT** set to `true` in production.
  - When `NEXT_PUBLIC_USE_DEMO_DATA` is `false` (default), the app strictly uses `productionProductsData`.

---

## Step 5: Verification & Pre-Deployment Audit

Run the following checks before publishing:
1. `npm run lint` — ensures no syntax or typing issues.
2. `npm run build` — ensures clean production bundle generation.
3. Test mobile viewport (360px–420px width) in Chrome / Safari DevTools.
4. Verify category bar smooth scrolling and language switcher (`FA`, `EN`, `AR`).
5. Scan QR code on a physical mobile device.
