'use client';

import React, { useEffect, useRef } from 'react';
import { Category, Language } from '@/types/menu';
import { getLocalizedText } from '@/lib/utils';

interface CategoryNavProps {
  categories: Category[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  language: Language;
}

export default function CategoryNav({
  categories,
  activeCategoryId,
  onSelectCategory,
  language,
}: CategoryNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll the horizontal category nav to keep the active category visible
  useEffect(() => {
    if (activeBtnRef.current && containerRef.current) {
      const container = containerRef.current;
      const button = activeBtnRef.current;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const scrollOffset =
        buttonRect.left -
        containerRect.left -
        containerRect.width / 2 +
        buttonRect.width / 2;

      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
    }
  }, [activeCategoryId]);

  return (
    <nav
      aria-label="Category Navigation"
      className="sticky top-[52px] z-30 bg-[#1E1A16]/95 backdrop-blur-md border-b border-[#302821] shadow-xs transition-colors"
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        <div
          ref={containerRef}
          className="flex items-center gap-1 sm:gap-3 overflow-x-auto no-scrollbar py-2 scroll-smooth"
        >
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;

            return (
              <button
                key={cat.id}
                ref={isActive ? activeBtnRef : null}
                id={`cat-nav-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative flex-none py-1.5 px-3 text-xs sm:text-[13px] font-serif whitespace-nowrap transition-all duration-200 cursor-pointer rounded-md ${
                  isActive
                    ? 'text-[#FAF6F0] font-bold bg-[#2C241D]'
                    : 'text-[#8E806F] hover:text-[#EAE3D7] hover:bg-[#251F1A]'
                }`}
              >
                <span>{getLocalizedText(cat.title, language)}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#BD9557] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
