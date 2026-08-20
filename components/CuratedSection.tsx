'use client';

import React from 'react';
import Image from 'next/image';
import { Product, Language } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { formatPrice, getLocalizedText } from '@/lib/utils';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

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
    <section className="py-5 px-4 sm:px-6 bg-[#F4EDE2] border-b border-[#E5DAC8]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#D4A359]/20 text-[#8C5D1F] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#2A231C]">
                {t.curatedTitle}
              </h2>
              <p className="text-[11px] text-[#7A6B5B] font-light hidden sm:block">
                {t.curatedSubtitle}
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8C5D1F] bg-[#E9DDCB] px-2 py-0.5 rounded-md">
            Chino Special
          </span>
        </div>

        {/* Horizontal scroll list */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {curatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectProduct(item)}
              className="flex-none w-[220px] sm:w-[240px] snap-start bg-[#FAF7F2] rounded-xl p-3 border border-[#E2D5C1] hover:border-[#C8933F] transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image if available */}
                {item.image && (
                  <div className="relative w-full h-24 mb-2.5 rounded-lg overflow-hidden bg-[#ECE3D4]">
                    <Image
                      src={item.image}
                      alt={getLocalizedText(item.name, language)}
                      fill
                      sizes="240px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1.5 right-1.5 bg-[#1A1815]/85 backdrop-blur-xs text-[#D4A359] text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                      {isRtl ? 'امضای چینو' : 'Signature'}
                    </div>
                  </div>
                )}

                <h3 className="font-bold text-xs sm:text-sm text-[#1F1C18] line-clamp-1 group-hover:text-[#8C5D1F] transition-colors mb-1">
                  {getLocalizedText(item.name, language)}
                </h3>

                {item.curatedNote && (
                  <p className="text-[11px] text-[#6B5D4D] line-clamp-2 leading-relaxed mb-2 font-normal">
                    {getLocalizedText(item.curatedNote, language)}
                  </p>
                )}
              </div>

              {/* Price & Click hint */}
              <div className="pt-2 border-t border-[#EFE7D8] flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-[#8C5D1F]">
                  {formatPrice(item.price, language)}
                </span>
                <span className="text-[10px] text-[#A0907E] group-hover:text-[#1F1C18] flex items-center gap-0.5 transition-colors">
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
