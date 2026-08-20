'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  categoriesData,
  productsData,
  tagsData,
  venueInfo,
} from '@/data/menu';
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
import { SearchX, Coffee } from 'lucide-react';

export default function ChinoDigitalMenuPage() {
  const [language, setLanguage] = useState<Language>('fa');
  const [viewMode, setViewMode] = useState<'photo' | 'editorial'>('photo');
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categoriesData[0]?.id || ''
  );
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
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
      const yOffset = -100; // Account for sticky header (52px) + category nav (40px) + spacing
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // IntersectionObserver for intelligent scroll synchronization with active category
  useEffect(() => {
    // If filtering with search, don't interfere aggressively
    if (searchQuery.trim() !== '' || selectedTag !== null) return;

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
        rootMargin: '-30% 0px -60% 0px', // Trigger when category enters top 30% of viewport
        threshold: 0,
      }
    );

    categoryElements.forEach((el) => observer.observe(el));

    return () => {
      categoryElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [searchQuery, selectedTag, productsByCategory]);

  const handleToggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleToggleFilter = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSelectedTag(null);
  };

  const isMenuEmpty = productsData.length === 0;

  return (
    <div
      className="min-h-screen flex flex-col bg-[#211E1B] text-[#EAE3D7] bg-chino-pattern selection:bg-[#BD9557]/30 selection:text-[#FAF7F2]"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <StructuredData />

      {/* 1. Compact Header Bar (<= 52px, Chino wordmark + restored Shahroud subtitle + 1-tap filter + explicit FA/EN/AR) */}
      <BrandHeader
        venue={venueInfo}
        language={language}
        onLanguageChange={setLanguage}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onSearchClick={handleToggleSearch}
        isSearchActive={isSearchOpen || searchQuery !== ''}
        onFilterClick={handleToggleFilter}
        isFilterActive={selectedTag !== null}
        activeFilterCount={selectedTag ? 1 : 0}
      />

      {/* 2. Compact Curated Section (Max 3 items, visible above the fold with 1st category) */}
      {!isMenuEmpty && !isSearchOpen && searchQuery.trim() === '' && selectedTag === null && (
        <CuratedSection
          products={productsData}
          language={language}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {/* 3. Primary Navigation: Sticky Category Bar */}
      {!isMenuEmpty && (
        <CategoryNav
          categories={categoriesData}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
          language={language}
        />
      )}

      {/* 4. On-Demand Search & Tag Filter Bar */}
      {!isMenuEmpty && (
        <SearchFilterBar
          isOpen={isSearchOpen}
          onClose={handleCloseSearch}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          tags={tagsData}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          language={language}
          totalFilteredCount={filteredProducts.length}
          totalAllCount={productsData.length}
        />
      )}

      {/* 5. Main Menu Sections */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-8 sm:space-y-10">
        {isMenuEmpty ? (
          // Respectful Production Empty State (When deploying with clean unpopulated products array)
          <div className="text-center py-16 px-4 bg-[#26211C] rounded-xl border border-[#352D25] my-8 max-w-md mx-auto space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#302821] text-[#BD9557] mx-auto flex items-center justify-center">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-serif text-[#FAF6F0] font-semibold">
              {language === 'en'
                ? 'Menu is Being Updated'
                : language === 'ar'
                ? 'القائمة قيد التحديث'
                : 'منوی دیجیتال در حال آماده‌سازی است'}
            </h3>
            <p className="text-xs text-[#9E8B75] leading-relaxed">
              {language === 'en'
                ? 'Please inquire with your table host for today’s fresh offerings and seasonal specials.'
                : language === 'ar'
                ? 'يرجى مراجعة مضيف الطاولة للاطلاع على عروض وأطباق اليوم الطازجة.'
                : 'لطفاً برای اطلاع از نوشیدنی‌ها، شیرینی‌ها و غذاهای روز با میزبان خود گفتگو فرمایید.'}
            </p>
          </div>
        ) : filteredProducts.length === 0 ? (
          // If no items match current search or filters
          <div className="text-center py-12 px-4 bg-[#26211C] rounded-lg border border-[#352D25] my-6">
            <div className="w-12 h-12 rounded-full bg-[#302821] text-[#BD9557] mx-auto flex items-center justify-center mb-3">
              <SearchX className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif text-[#FAF6F0] mb-1 font-semibold">
              {t.noResultsTitle}
            </h3>
            <p className="text-xs text-[#8E8272] max-w-xs mx-auto mb-4 font-normal">
              {t.noResultsDesc}
            </p>
            <button
              onClick={handleCloseSearch}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3A3229] hover:bg-[#4D4236] text-[#FAF6F0] text-xs rounded-md transition-colors cursor-pointer border border-[#4D4236]"
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
                className="scroll-mt-28 pt-4 sm:pt-6"
              >
                {/* Category Header: Visually separated with generous spacing */}
                <div className="mb-3.5 pb-2 border-b border-[#352D25] flex items-baseline justify-between gap-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-serif text-[#FAF6F0] font-bold tracking-wide">
                      {getLocalizedText(category.title, language)}
                    </h2>
                    {category.subtitle && (
                      <p className="text-xs text-[#9E9180] font-light leading-relaxed mt-0.5">
                        {getLocalizedText(category.subtitle, language)}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] text-[#7A6E5F] font-mono shrink-0">
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
