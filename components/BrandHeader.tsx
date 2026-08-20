'use client';

import React from 'react';
import { Language, VenueInfo } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';
import { Image as ImageIcon, FileText, Search } from 'lucide-react';

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
    <header className="relative bg-[#1C1916] text-[#EAE3D7] border-b border-[#2E2822] transition-colors">
      {/* Delicate warm bronze hairline indicator */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#BD9557]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 pt-4 pb-5 sm:px-6">
        {/* Top utility row: Status & Discreet Controls */}
        <div className="flex items-center justify-between gap-3 text-xs mb-3">
          {/* Calm status indicator */}
          <div className="inline-flex items-center gap-1.5 text-[11px] text-[#A09484]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD9557]" />
            <span className="font-normal tracking-wide">{t.openNow}</span>
          </div>

          {/* Quick Controls: Search, View Mode, Language */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search shortcut button */}
            <button
              id="header-search-btn"
              onClick={onSearchClick}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded bg-[#27221D] hover:bg-[#322C25] border border-[#383027] text-[#C4B7A5] transition-colors flex items-center gap-1.5 cursor-pointer"
              title={t.searchAriaLabel}
              aria-label={t.searchAriaLabel}
            >
              <Search className="w-3.5 h-3.5 text-[#BD9557]" />
              <span className="hidden md:inline text-[11px]">{t.searchAriaLabel}</span>
            </button>

            {/* View Mode Toggle (Photo vs Editorial) */}
            <div className="flex items-center bg-[#27221D] rounded p-0.5 border border-[#383027]">
              <button
                id="viewmode-photo-btn"
                onClick={() => onViewModeChange('photo')}
                className={`p-1.5 rounded transition-all flex items-center gap-1 text-[11px] font-medium cursor-pointer ${
                  viewMode === 'photo'
                    ? 'bg-[#3A322A] text-[#EAE3D7]'
                    : 'text-[#8A7E70] hover:text-[#C4B7A5]'
                }`}
                title={t.photoModeTooltip}
                aria-label={t.viewModePhoto}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px]">{t.viewModePhoto}</span>
              </button>
              <button
                id="viewmode-editorial-btn"
                onClick={() => onViewModeChange('editorial')}
                className={`p-1.5 rounded transition-all flex items-center gap-1 text-[11px] font-medium cursor-pointer ${
                  viewMode === 'editorial'
                    ? 'bg-[#3A322A] text-[#EAE3D7]'
                    : 'text-[#8A7E70] hover:text-[#C4B7A5]'
                }`}
                title={t.editorialModeTooltip}
                aria-label={t.viewModeEditorial}
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px]">{t.viewModeEditorial}</span>
              </button>
            </div>

            {/* Discreet Language Selector */}
            <div className="flex items-center gap-1 text-[11px] font-mono tracking-wider bg-[#27221D] px-2 py-1 rounded border border-[#383027]">
              <button
                id="lang-fa-btn"
                onClick={() => onLanguageChange('fa')}
                className={`transition-colors cursor-pointer px-1 ${
                  language === 'fa'
                    ? 'text-[#BD9557] font-bold'
                    : 'text-[#8A7E70] hover:text-[#EAE3D7]'
                }`}
              >
                FA
              </button>
              <span className="text-[#443B31]">/</span>
              <button
                id="lang-en-btn"
                onClick={() => onLanguageChange('en')}
                className={`transition-colors cursor-pointer px-1 ${
                  language === 'en'
                    ? 'text-[#BD9557] font-bold'
                    : 'text-[#8A7E70] hover:text-[#EAE3D7]'
                }`}
              >
                EN
              </button>
              <span className="text-[#443B31]">/</span>
              <button
                id="lang-ar-btn"
                onClick={() => onLanguageChange('ar')}
                className={`transition-colors cursor-pointer px-1 ${
                  language === 'ar'
                    ? 'text-[#BD9557] font-bold'
                    : 'text-[#8A7E70] hover:text-[#EAE3D7]'
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>

        {/* Brand identity center presentation */}
        <div className="text-center pt-1 pb-1">
          {/* Primary Wordmark */}
          <h1 className="text-3xl sm:text-4xl font-serif tracking-widest text-[#EAE3D7] mb-1 font-normal">
            {getLocalizedText(venue.name, language)}
          </h1>

          {/* Subtitle / Tagline with quiet Iranian warmth */}
          <p className="text-xs text-[#9E9383] font-light max-w-sm mx-auto leading-relaxed">
            {getLocalizedText(venue.tagline, language)}
          </p>
        </div>
      </div>
    </header>
  );
}
