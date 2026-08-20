'use client';

import React from 'react';
import { Language, VenueInfo } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';
import {
  Search,
  Grid,
  List,
  SlidersHorizontal,
} from 'lucide-react';

interface BrandHeaderProps {
  venue: VenueInfo;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  viewMode: 'photo' | 'editorial';
  onViewModeChange: (mode: 'photo' | 'editorial') => void;
  onSearchClick: () => void;
  isSearchActive?: boolean;
  onFilterClick?: () => void;
  isFilterActive?: boolean;
  activeFilterCount?: number;
}

export default function BrandHeader({
  venue,
  language,
  onLanguageChange,
  viewMode,
  onViewModeChange,
  onSearchClick,
  isSearchActive = false,
  onFilterClick,
  isFilterActive = false,
  activeFilterCount = 0,
}: BrandHeaderProps) {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 bg-[#1A1714] text-[#EAE3D7] border-b border-[#2E2822] shadow-xs">
      {/* 52px Compact Single Row Bar */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-[52px] flex items-center justify-between gap-2">
        {/* Brand Wordmark & Local Shahroud Geographic Resonance (#3 restored) */}
        <div className="flex items-center gap-2 select-none min-w-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-baseline gap-2 group cursor-pointer"
            aria-label="Chino Cafe - Return to top"
          >
            <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-wide text-[#FAF6F0] group-hover:text-[#BD9557] transition-colors leading-none">
              {getLocalizedText(venue.name, language)}
            </h1>
            <span className="text-[10px] font-mono tracking-widest text-[#9E8B75] uppercase hidden xs:inline">
              {getLocalizedText(venue.city, language) || 'شاهرود'}
            </span>
          </a>
        </div>

        {/* Action Controls: Search, Direct Filter Drawer, View Mode, Explicit Language (#1 & #5 restored) */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* 1. Search Icon Button */}
          <button
            id="header-search-btn"
            onClick={onSearchClick}
            className={`min-w-[40px] h-[40px] sm:min-w-[44px] sm:h-[44px] p-2 sm:p-2.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
              isSearchActive
                ? 'bg-[#362D23] text-[#BD9557] border border-[#BD9557]/40'
                : 'text-[#C4B7A5] hover:text-[#FAF6F0] hover:bg-[#28231E]'
            }`}
            title={t.searchAriaLabel}
            aria-label={t.searchAriaLabel}
          >
            <Search className="w-4 h-4 text-[#BD9557]" />
          </button>

          {/* 2. Direct 1-Tap Filter Button with Active Badge (#5 restored) */}
          {onFilterClick && (
            <button
              id="header-filter-btn"
              onClick={onFilterClick}
              className={`relative min-w-[40px] h-[40px] sm:min-w-[44px] sm:h-[44px] p-2 sm:p-2.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                isFilterActive
                  ? 'bg-[#362D23] text-[#BD9557] border border-[#BD9557]/40'
                  : 'text-[#C4B7A5] hover:text-[#FAF6F0] hover:bg-[#28231E]'
              }`}
              title={t.filterByTag}
              aria-label={t.filterByTag}
            >
              <SlidersHorizontal className="w-4 h-4 text-[#BD9557]" />
              {activeFilterCount > 0 && (
                <span className="absolute top-1.5 end-1.5 w-2 h-2 rounded-full bg-[#BD9557] ring-2 ring-[#1A1714]" />
              )}
            </button>
          )}

          {/* 3. View Mode Toggle (Photo vs Editorial) */}
          <button
            id="header-viewmode-btn"
            onClick={() =>
              onViewModeChange(viewMode === 'photo' ? 'editorial' : 'photo')
            }
            className="min-w-[40px] h-[40px] sm:min-w-[44px] sm:h-[44px] p-2 sm:p-2.5 rounded-lg flex items-center justify-center text-[#C4B7A5] hover:text-[#FAF6F0] hover:bg-[#28231E] transition-colors cursor-pointer"
            title={
              viewMode === 'photo'
                ? t.editorialModeTooltip
                : t.photoModeTooltip
            }
            aria-label={
              viewMode === 'photo'
                ? t.viewModeEditorial
                : t.viewModePhoto
            }
          >
            {viewMode === 'photo' ? (
              <List className="w-4 h-4 text-[#C4B7A5]" />
            ) : (
              <Grid className="w-4 h-4 text-[#BD9557]" />
            )}
          </button>

          {/* 4. Explicit Multilingual Switcher: FA · EN · AR (#1 restored) */}
          <div className="flex items-center bg-[#25201A] rounded-lg p-0.5 border border-[#3A3229]">
            {(['fa', 'en', 'ar'] as Language[]).map((langCode) => {
              const isActive = language === langCode;
              return (
                <button
                  key={langCode}
                  id={`lang-${langCode}-btn`}
                  onClick={() => onLanguageChange(langCode)}
                  className={`px-1.5 sm:px-2 py-1 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#3A3026] text-[#BD9557] shadow-xs'
                      : 'text-[#8A7E70] hover:text-[#EAE3D7]'
                  }`}
                  title={
                    langCode === 'fa'
                      ? 'فارسی'
                      : langCode === 'en'
                      ? 'English'
                      : 'العربية'
                  }
                  aria-label={`Switch to ${langCode.toUpperCase()}`}
                >
                  {langCode.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
