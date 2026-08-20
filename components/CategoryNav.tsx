'use client';

import React, { useEffect, useRef } from 'react';
import { Category, Language } from '@/types/menu';
import { getLocalizedText } from '@/lib/utils';
import {
  Coffee,
  Flame,
  Sparkles,
  Leaf,
  Sun,
  UtensilsCrossed,
  Cake,
  Layers,
} from 'lucide-react';

interface CategoryNavProps {
  categories: Category[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  language: Language;
}

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-3.5 h-3.5" />,
  Flame: <Flame className="w-3.5 h-3.5" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Leaf: <Leaf className="w-3.5 h-3.5" />,
  Sun: <Sun className="w-3.5 h-3.5" />,
  UtensilsCrossed: <UtensilsCrossed className="w-3.5 h-3.5" />,
  Cake: <Cake className="w-3.5 h-3.5" />,
};

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
      className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DEC8] shadow-xs"
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div
          ref={containerRef}
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-2.5 scroll-smooth"
        >
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            const icon = (cat.iconName && iconMap[cat.iconName]) || (
              <Layers className="w-3.5 h-3.5" />
            );

            return (
              <button
                key={cat.id}
                ref={isActive ? activeBtnRef : null}
                id={`cat-nav-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-none inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1A1815] text-[#FAF7F2] shadow-sm border border-[#1A1815] ring-2 ring-[#D4A359]/30'
                    : 'bg-[#EDE4D5] text-[#5C5042] hover:bg-[#E3D7C4] hover:text-[#1A1815] border border-[#DDD1BE]'
                }`}
              >
                <span
                  className={
                    isActive
                      ? 'text-[#D4A359]'
                      : 'text-[#8A7966] group-hover:text-[#1A1815]'
                  }
                >
                  {icon}
                </span>
                <span>{getLocalizedText(cat.title, language)}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
