'use client';

import React, { useRef, useEffect } from 'react';
import { Tag, TagId, Language } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';
import { Search, X, Check } from 'lucide-react';

interface SearchFilterBarProps {
  isOpen: boolean;
  onClose: () => void;
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
  isOpen,
  onClose,
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

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen && searchQuery === '' && selectedTag === null) {
    return null;
  }

  const isFiltering = searchQuery.trim() !== '' || selectedTag !== null;

  return (
    <div className="bg-[#241F1A] border-b border-[#352D25] px-3 py-3 sm:px-6 transition-all duration-300">
      <div className="max-w-5xl mx-auto space-y-2.5">
        {/* Search Input Box */}
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#BD9557]">
            <Search className="w-4 h-4" />
          </div>
          <input
            ref={inputRef}
            id="menu-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-[#1C1814] border border-[#3A3229] focus:border-[#BD9557] text-[#FAF6F0] text-xs sm:text-sm rounded-lg py-2 ps-9 pe-20 transition-all placeholder:text-[#7D7162] outline-none"
            dir={language === 'en' ? 'ltr' : 'rtl'}
          />

          <div className="absolute inset-y-0 end-0 flex items-center pe-2 gap-1">
            {searchQuery && (
              <button
                onClick={() => {
                  onSearchChange('');
                  inputRef.current?.focus();
                }}
                className="p-1 text-[#8C8070] hover:text-[#FAF6F0] cursor-pointer rounded"
                aria-label="Clear text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2 py-1 text-xs text-[#9E9180] hover:text-[#FAF6F0] hover:bg-[#2F2720] rounded transition-colors cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        </div>

        {/* Quick Tag Filters (Only inside search mode) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] font-mono text-[#8C8070] shrink-0 me-1">
            {t.filterByTag}:
          </span>

          {tags.map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => onSelectTag(isSelected ? null : tag.id)}
                className={`flex-none inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#BD9557] text-[#1A1714] font-bold border border-[#BD9557]'
                    : 'bg-[#1C1814] text-[#8C8070] hover:text-[#EAE3D7] border border-[#352D25]'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-[#1A1714]" />}
                <span>{getLocalizedText(tag.label, language)}</span>
              </button>
            );
          })}

          {isFiltering && (
            <button
              onClick={() => {
                onSearchChange('');
                onSelectTag(null);
              }}
              className="flex-none inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-[#C27365] bg-[#342421] hover:bg-[#422C28] border border-[#4D332D] transition-colors cursor-pointer"
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

