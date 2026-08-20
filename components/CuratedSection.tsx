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
  const curatedItems = products.filter((p) => p.isCurated).slice(0, 4);
  if (curatedItems.length === 0) return null;

  const t = translations[language];
  const isRtl = language !== 'en';

  return (
    <section className="py-5 px-4 sm:px-6 bg-[#25201C] border-b border-[#352D26]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with quiet hospitality tone */}
        <div className="flex items-baseline justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#BD9557]" />
            <h2 className="text-sm font-serif text-[#EAE3D7] font-medium tracking-wide">
              {t.curatedTitle}
            </h2>
            <span className="text-[11px] text-[#8C8070] font-light hidden sm:inline">
              — {t.curatedSubtitle}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#A89A86] tracking-wider">
            CHINO SELECTION
          </span>
        </div>

        {/* Horizontal curated cards */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {curatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectProduct(item)}
              className="flex-none w-[220px] sm:w-[240px] snap-start bg-[#2B2520] rounded-lg p-3 border border-[#3E342B] hover:border-[#BD9557]/60 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image if available */}
                {item.image && (
                  <div className="relative w-full h-24 mb-2.5 rounded overflow-hidden bg-[#201C19]">
                    <Image
                      src={item.image}
                      alt={getLocalizedText(item.name, language)}
                      fill
                      sizes="240px"
                      className="object-cover group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <h3 className="font-serif text-sm text-[#EAE3D7] line-clamp-1 group-hover:text-[#BD9557] transition-colors mb-1">
                  {getLocalizedText(item.name, language)}
                </h3>

                {item.curatedNote && (
                  <p className="text-xs text-[#9E9180] line-clamp-2 leading-relaxed mb-2 font-normal">
                    {getLocalizedText(item.curatedNote, language)}
                  </p>
                )}
              </div>

              {/* Price & Soft hint */}
              <div className="pt-2 border-t border-[#3A3128] flex items-center justify-between mt-auto">
                <span className="text-xs font-mono font-medium text-[#D5C9B8]">
                  {formatPrice(item.price, language)}
                </span>
                <span className="text-[10px] text-[#8C8070] group-hover:text-[#BD9557] flex items-center gap-0.5 transition-colors">
                  {isRtl ? (
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
