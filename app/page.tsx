'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  categoriesData,
  productsData,
  tagsData,
  venueInfo,
} from '@/data/menu-data';
import { Language, Product, Tag, TagId } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';

import BrandHeader from '@/components/BrandHeader';
import CuratedSection from '@/components/CuratedSection';
import CategoryNav from '@/components/CategoryNav';
import SearchFilterBar from '@/components/SearchFilterBar';
import ProductCard from '@/components/ProductCard';
import ProductDetailModal from '@/components/ProductDetailModal';
import VenueFooter from '@/components/VenueFooter';
import StructuredData from '@/components/StructuredData';
import { Sparkles, Utensils, SearchX, Coffee } from 'lucide-react';

export default function ChinoDigitalMenuPage() {
  const [language, setLanguage] = useState<Language>('fa');
  const [viewMode, setViewMode] = useState<'photo' | 'editorial'>('photo');
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categoriesData[0]?.id || ''
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<TagId | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const t = translations[language];
  const isRtl = language !== 'en';

  // Build a fast lookup for tags
  const tagsMap = useMemo(() => {
    const map: Record<string, Tag> = {};
    tagsData.forEach((tag) => {
      map[tag.id] = tag;
    });
    return map;
  }, []);

  // Update HTML document direction and lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language, isRtl]);

  // Filter products based on search and selected tag
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Tag filter
      if (selectedTag && (!product.tags || !product.tags.includes(selectedTag))) {
        return false;
      }

      // Search query filter across all 3 languages
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const nameFa = product.name.fa?.toLowerCase() || '';
        const nameEn = product.name.en?.toLowerCase() || '';
        const nameAr = product.name.ar?.toLowerCase() || '';
        const descFa = product.description?.fa?.toLowerCase() || '';
        const descEn = product.description?.en?.toLowerCase() || '';
        const descAr = product.description?.ar?.toLowerCase() || '';
        const originFa = product.origin?.fa?.toLowerCase() || '';
        const originEn = product.origin?.en?.toLowerCase() || '';

        const matches =
          nameFa.includes(q) ||
          nameEn.includes(q) ||
          nameAr.includes(q) ||
          descFa.includes(q) ||
          descEn.includes(q) ||
          descAr.includes(q) ||
          originFa.includes(q) ||
          originEn.includes(q);

        if (!matches) return false;
      }

      return true;
    });
  }, [searchQuery, selectedTag]);

  // Group filtered products by category
  const productsByCategory = useMemo(() => {
    const map: Record<string, Product[]> = {};
    categoriesData.forEach((cat) => {
      map[cat.id] = [];
    });
    filteredProducts.forEach((product) => {
      if (map[product.categoryId]) {
        map[product.categoryId].push(product);
      }
    });
    return map;
  }, [filteredProducts]);

  // Scroll to category smoothly on user click
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(`category-section-${categoryId}`);
    if (element) {
      const yOffset = -60; // Offset for sticky category bar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // IntersectionObserver for intelligent scroll synchronization with active category
  useEffect(() => {
    // If filtering with search, don't interfere aggressively
    if (searchQuery.trim() !== '') return;

    const categoryElements = categoriesData
      .map((cat) => document.getElementById(`category-section-${cat.id}`))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const catId = entry.target.getAttribute('data-category-id');
            if (catId) {
              setActiveCategoryId(catId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -65% 0px', // Trigger when category header enters upper viewport
        threshold: 0,
      }
    );

    categoryElements.forEach((el) => observer.observe(el));

    return () => {
      categoryElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [searchQuery, productsByCategory]);

  const handleSearchFocus = () => {
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F1C18]"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <StructuredData />

      {/* 1. Brand Header (Subtle, establishes Chino identity without splash screen) */}
      <BrandHeader
        venue={venueInfo}
        language={language}
        onLanguageChange={setLanguage}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onSearchClick={handleSearchFocus}
      />

      {/* 2. Optional Curated First View ("پیشنهاد چینو") */}
      {searchQuery.trim() === '' && selectedTag === null && (
        <CuratedSection
          products={productsData}
          language={language}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {/* 3. Sticky Category Navigation Bar */}
      <CategoryNav
        categories={categoriesData}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
        language={language}
      />

      {/* 4. Search and Tag Filter Bar */}
      <SearchFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        tags={tagsData}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
        language={language}
        totalFilteredCount={filteredProducts.length}
        totalAllCount={productsData.length}
      />

      {/* 5. Main Menu Sections */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-10">
        {/* If no items match current search or filters */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#FFFFFF] rounded-2xl border border-[#E9E1D2] shadow-xs my-6">
            <div className="w-12 h-12 rounded-full bg-[#F4EDE2] text-[#8C5D1F] mx-auto flex items-center justify-center mb-3">
              <SearchX className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1A1815] mb-1">
              {t.noResultsTitle}
            </h3>
            <p className="text-xs text-[#7A6B5B] max-w-xs mx-auto mb-4">
              {t.noResultsDesc}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1A1815] hover:bg-[#2C2722] text-[#FAF7F2] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              <span>{t.resetSearch}</span>
            </button>
          </div>
        ) : (
          categoriesData.map((category) => {
            const items = productsByCategory[category.id] || [];
            if (items.length === 0) return null;

            return (
              <section
                key={category.id}
                id={`category-section-${category.id}`}
                data-category-id={category.id}
                className="scroll-mt-16"
              >
                {/* Category Header */}
                <div className="mb-4 pb-2 border-b border-[#E6DEC8] flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#C8933F]" />
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1815] tracking-tight">
                        {getLocalizedText(category.title, language)}
                      </h3>
                    </div>
                    {category.subtitle && (
                      <p className="text-xs text-[#7A6B5B] font-light leading-relaxed">
                        {getLocalizedText(category.subtitle, language)}
                      </p>
                    )}
                  </div>
                  <span className="text-[11px] text-[#A0907E] font-mono px-2 py-0.5 rounded-md bg-[#EDE4D5]">
                    {items.length} {t.itemsCount}
                  </span>
                </div>

                {/* Product Grid */}
                <div
                  className={`grid gap-3 sm:gap-4 ${
                    viewMode === 'photo'
                      ? 'grid-cols-1 md:grid-cols-2'
                      : 'grid-cols-1 md:grid-cols-2'
                  }`}
                >
                  {items.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      tagsMap={tagsMap}
                      language={language}
                      viewMode={viewMode}
                      onSelect={setSelectedProduct}
                    />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      {/* 6. Product Detail Modal / Sheet */}
      <ProductDetailModal
        product={selectedProduct}
        tagsMap={tagsMap}
        language={language}
        onClose={() => setSelectedProduct(null)}
      />

      {/* 7. Venue Details & Hospitality Footer */}
      <VenueFooter venue={venueInfo} language={language} />
    </div>
  );
}
