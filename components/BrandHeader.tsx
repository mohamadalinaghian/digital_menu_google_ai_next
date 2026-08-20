'use client';

import React from 'react';
import { Language, VenueInfo } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';
import { Globe, Sparkles, Image as ImageIcon, FileText, Search, MapPin, Clock } from 'lucide-react';

interface BrandHeaderProps {
  venue: VenueInfo;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  viewMode: 'photo' | 'editorial';
  onViewModeChange: (mode: 'photo' | 'editorial') => void;
  onSearchClick: () => void;
}

export default function BrandHeader({
  venue,
  language,
  onLanguageChange,
  viewMode,
  onViewModeChange,
  onSearchClick,
}: BrandHeaderProps) {
  const t = translations[language];

  return (
    <header className="relative bg-[#1A1815] text-[#FAF7F2] border-b border-[#2C2722] overflow-hidden">
      {/* Subtle architectural nostalgic accent line at the very top */}
      <div className="h-1 w-full bg-gradient-to-r from-[#9B6A28] via-[#D4A359] to-[#9B6A28]" />

      <div className="max-w-4xl mx-auto px-4 pt-5 pb-6 sm:px-6">
        {/* Top utility row: Status, Language Switcher, View Mode */}
        <div className="flex items-center justify-between gap-3 text-xs mb-4">
          {/* Status badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#28231D] text-[#D8C7B0] border border-[#3D352B]">
            <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse inline-block" />
            <span className="font-medium tracking-tight">{t.openNow}</span>
            <span className="text-[#8E8070] hidden sm:inline">· {t.closedNow}</span>
          </div>

          {/* Quick Controls: Search, View Mode, Language */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search shortcut button */}
            <button
              id="header-search-btn"
              onClick={onSearchClick}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#28231D] hover:bg-[#352F27] border border-[#3D352B] text-[#D8C7B0] transition-colors flex items-center gap-1.5 cursor-pointer"
              title={t.searchAriaLabel}
              aria-label={t.searchAriaLabel}
            >
              <Search className="w-3.5 h-3.5 text-[#D4A359]" />
              <span className="hidden md:inline">{t.searchAriaLabel}</span>
            </button>

            {/* View Mode Toggle (Photo vs Editorial) */}
            <div className="flex items-center bg-[#28231D] rounded-lg p-0.5 border border-[#3D352B]">
              <button
                id="viewmode-photo-btn"
                onClick={() => onViewModeChange('photo')}
                className={`p-1.5 rounded-md transition-all flex items-center gap-1 text-[11px] font-medium cursor-pointer ${
                  viewMode === 'photo'
                    ? 'bg-[#D4A359] text-[#1A1815] shadow-xs'
                    : 'text-[#A89A88] hover:text-[#FAF7F2]'
                }`}
                title={t.photoModeTooltip}
                aria-label={t.viewModePhoto}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.viewModePhoto}</span>
              </button>
              <button
                id="viewmode-editorial-btn"
                onClick={() => onViewModeChange('editorial')}
                className={`p-1.5 rounded-md transition-all flex items-center gap-1 text-[11px] font-medium cursor-pointer ${
                  viewMode === 'editorial'
                    ? 'bg-[#D4A359] text-[#1A1815] shadow-xs'
                    : 'text-[#A89A88] hover:text-[#FAF7F2]'
                }`}
                title={t.editorialModeTooltip}
                aria-label={t.viewModeEditorial}
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.viewModeEditorial}</span>
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center bg-[#28231D] rounded-lg p-0.5 border border-[#3D352B]">
              <button
                id="lang-fa-btn"
                onClick={() => onLanguageChange('fa')}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'fa'
                    ? 'bg-[#FAF7F2] text-[#1A1815]'
                    : 'text-[#A89A88] hover:text-[#FAF7F2]'
                }`}
              >
                فا
              </button>
              <button
                id="lang-en-btn"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#FAF7F2] text-[#1A1815]'
                    : 'text-[#A89A88] hover:text-[#FAF7F2]'
                }`}
              >
                EN
              </button>
              <button
                id="lang-ar-btn"
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#FAF7F2] text-[#1A1815]'
                    : 'text-[#A89A88] hover:text-[#FAF7F2]'
                }`}
              >
                ع
              </button>
            </div>
          </div>
        </div>

        {/* Brand identity center presentation */}
        <div className="text-center pt-2 pb-1">
          {/* Subtle ornamental crest */}
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4A359]/60" />
            <span className="text-[#D4A359] text-[10px] tracking-widest uppercase font-semibold">
              {getLocalizedText(venue.city, language)} · EST. 2022
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4A359]/60" />
          </div>

          {/* Primary Wordmark */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF7F2] mb-1.5">
            {getLocalizedText(venue.name, language)}
          </h1>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-[#C4B59F] font-light max-w-md mx-auto leading-relaxed">
            {getLocalizedText(venue.tagline, language)}
          </p>

          {/* Location & Quick Context Pill */}
          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[#A89A88]">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D4A359]" />
              {getLocalizedText(venue.city, language)} · فردوسی
            </span>
            <span className="text-[#4E4437]">|</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#D4A359]" />
              ۸:۳۰ – ۲۳:۳۰
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
