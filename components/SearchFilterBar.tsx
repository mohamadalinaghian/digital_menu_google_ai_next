'use client';

import React, { useRef } from 'react';
import { Tag, TagId, Language } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';
import { Search, X, Check } from 'lucide-react';

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
    <div className="bg-[#211E1B] border-b border-[#332C25] px-4 py-3 sm:px-6 transition-colors">
      <div className="max-w-5xl mx-auto space-y-2.5">
        {/* Search Input Box */}
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#7D7162]">
            <Search className="w-4 h-4" />
          </div>
          <input
            ref={inputRef}
            id="menu-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-[#2A241F] border border-[#3A3229] focus:border-[#BD9557]/70 text-[#EAE3D7] text-xs sm:text-sm rounded py-2 ps-9 pe-9 transition-all placeholder:text-[#7D7162] outline-none"
            dir={language === 'en' ? 'ltr' : 'rtl'}
          />
          {searchQuery && (
            <button
              onClick={() => {
                onSearchChange('');
                inputRef.current?.focus();
              }}
              className="absolute inset-y-0 end-0 flex items-center pe-3 text-[#7D7162] hover:text-[#EAE3D7] cursor-pointer"
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
            className={`flex-none px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
              selectedTag === null
                ? 'bg-[#3A3229] text-[#EAE3D7] font-semibold border border-[#4D4236]'
                : 'bg-[#2A241F] text-[#8C8070] hover:text-[#EAE3D7] border border-[#352D25]'
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
                className={`flex-none inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#BD9557] text-[#1C1916] font-semibold border border-[#BD9557]'
                    : 'bg-[#2A241F] text-[#8C8070] hover:text-[#EAE3D7] border border-[#352D25]'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-[#1C1916]" />}
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
              className="flex-none inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs text-[#C27365] bg-[#342421] hover:bg-[#422C28] border border-[#4D332D] transition-colors cursor-pointer"
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
