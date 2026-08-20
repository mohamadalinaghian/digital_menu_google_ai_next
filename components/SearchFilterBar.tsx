'use client';

import React, { useRef } from 'react';
import { Tag, TagId, Language } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';
import { Search, X, SlidersHorizontal, Check } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  tags: Tag[];
  selectedTag: TagId | null;
  onSelectTag: (tagId: TagId | null) => void;
  language: Language;
  totalFilteredCount: number;
  totalAllCount: number;
}

export default function SearchFilterBar({
  searchQuery,
  onSearchChange,
  tags,
  selectedTag,
  onSelectTag,
  language,
  totalFilteredCount,
  totalAllCount,
}: SearchFilterBarProps) {
  const t = translations[language];
  const inputRef = useRef<HTMLInputElement>(null);
  const isFiltering = searchQuery.trim() !== '' || selectedTag !== null;

  return (
    <div className="bg-[#FAF7F2] border-b border-[#E6DEC8] px-4 py-3 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-2.5">
        {/* Search Input Box */}
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#8A7A68]">
            <Search className="w-4 h-4" />
          </div>
          <input
            ref={inputRef}
            id="menu-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-[#FFFFFF] border border-[#DDD1BE] focus:border-[#C8933F] focus:ring-2 focus:ring-[#C8933F]/20 text-[#1F1C18] text-xs sm:text-sm rounded-xl py-2 ps-9 pe-9 transition-all placeholder:text-[#A0907E] outline-none"
            dir={language === 'en' ? 'ltr' : 'rtl'}
          />
          {searchQuery && (
            <button
              onClick={() => {
                onSearchChange('');
                inputRef.current?.focus();
              }}
              className="absolute inset-y-0 end-0 flex items-center pe-3 text-[#8A7A68] hover:text-[#1F1C18] cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Tag Filters list */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {/* All tags button */}
          <button
            onClick={() => onSelectTag(null)}
            className={`flex-none px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedTag === null
                ? 'bg-[#1A1815] text-[#FAF7F2]'
                : 'bg-[#EDE4D5] text-[#6B5D4D] hover:bg-[#E3D7C4]'
            }`}
          >
            {t.allTags}
          </button>

          {/* Individual tags */}
          {tags.map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => onSelectTag(isSelected ? null : tag.id)}
                className={`flex-none inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#8C5D1F] text-[#FAF7F2] shadow-xs'
                    : 'bg-[#EDE4D5] text-[#5C5042] hover:bg-[#E3D7C4]'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-[#FAF7F2]" />}
                <span>{getLocalizedText(tag.label, language)}</span>
              </button>
            );
          })}

          {/* Reset button if filtered */}
          {isFiltering && (
            <button
              onClick={() => {
                onSearchChange('');
                onSelectTag(null);
              }}
              className="flex-none inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-[#A34836] bg-[#FDEAE7] hover:bg-[#FCDFD9] transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>{t.clearFilter}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
