'use client';

import React from 'react';
import Image from 'next/image';
import { Product, Language } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { formatPrice, getLocalizedText } from '@/lib/utils';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

interface CuratedSectionProps {
  products: Product[];
  language: Language;
  onSelectProduct: (product: Product) => void;
}

export default function CuratedSection({
  products,
  language,
  onSelectProduct,
}: CuratedSectionProps) {
  // Pull curated items (isCurated flag) or up to 3 items
  const finalCurated = products.filter((p) => p.isCurated).slice(0, 3);

  // If no items are explicitly curated, don't show the section
  if (finalCurated.length === 0) return null;

  const t = translations[language];
  const isRtl = language !== 'en';

  return (
    <section className="py-3 px-3 sm:px-6 bg-[#231E1A] border-b border-[#302821]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#BD9557]" />
            <h2 className="text-xs sm:text-sm font-serif text-[#FAF6F0] font-semibold tracking-wide">
              {t.curatedTitle}
            </h2>
            <span className="text-[10px] text-[#8C8070] font-light hidden sm:inline">
              — {t.curatedSubtitle}
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#8E806F] tracking-widest uppercase">
            CHINO SELECTION
          </span>
        </div>

        {/* Horizontal curated cards (Richer tasting notes & origin depth - #4 restored) */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 snap-x snap-mandatory -mx-3 px-3 sm:mx-0 sm:px-0">
          {finalCurated.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProduct(item);
                }
              }}
              className="flex-none w-[260px] sm:w-[290px] snap-start bg-[#2A241E] hover:bg-[#322C24] rounded-lg p-3 border border-[#3A3229] hover:border-[#BD9557]/60 transition-all duration-200 cursor-pointer flex gap-3 items-center justify-between group shadow-xs"
            >
              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xs sm:text-sm text-[#FAF6F0] font-semibold line-clamp-1 group-hover:text-[#BD9557] transition-colors leading-snug">
                  {getLocalizedText(item.name, language)}
                </h3>

                {/* Origin / Terroir Note */}
                {item.origin && (
                  <p className="text-[10px] text-[#BD9557] font-normal truncate mt-0.5">
                    {getLocalizedText(item.origin, language)}
                  </p>
                )}

                {/* Tasting note / Note */}
                {(item.curatedNote || item.description) && (
                  <p className="text-[10.5px] text-[#9E9180] line-clamp-2 leading-[1.6] mt-1 font-normal">
                    {getLocalizedText(item.curatedNote || item.description, language)}
                  </p>
                )}

                <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-[#383026]">
                  <span className="text-xs font-mono font-bold text-[#E2D6C5]">
                    {formatPrice(item.price, language)}
                  </span>
                  <span className="text-[10px] text-[#8C8070] group-hover:text-[#BD9557] flex items-center gap-0.5 transition-colors font-medium">
                    <span>{language === 'en' ? 'Taste' : 'تجربه'}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </span>
                </div>
              </div>

              {/* Side Thumbnail */}
              {item.image && (
                <div className="flex-none relative w-16 h-16 sm:w-18 sm:h-18 rounded-md overflow-hidden bg-[#1D1916] border border-[#3A3229]">
                  <Image
                    src={item.image}
                    alt={getLocalizedText(item.name, language)}
                    fill
                    sizes="72px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
