'use client';

import React from 'react';
import Image from 'next/image';
import { Product, Tag, Language } from '@/types/menu';
import { formatPrice, getLocalizedText } from '@/lib/utils';
import { Sparkles, Clock, Flame } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  tagsMap: Record<string, Tag>;
  language: Language;
  viewMode: 'photo' | 'editorial';
  onSelect: (product: Product) => void;
}

export default function ProductCard({
  product,
  tagsMap,
  language,
  viewMode,
  onSelect,
}: ProductCardProps) {
  const isRtl = language !== 'en';
  const hasImage = Boolean(product.image && viewMode === 'photo');

  return (
    <article
      id={`product-card-${product.id}`}
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(product);
        }
      }}
      className="group relative bg-[#FFFFFF] rounded-2xl p-3.5 sm:p-4 border border-[#E9E1D2] hover:border-[#C8933F] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div className="flex gap-3 sm:gap-4">
        {/* Text Details Area */}
        <div className="flex-1 min-w-0">
          {/* Header Row: Title & Curated Badge */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="font-bold text-sm sm:text-base text-[#1A1815] group-hover:text-[#8C5D1F] transition-colors leading-snug">
              {getLocalizedText(product.name, language)}
            </h4>
          </div>

          {/* Optional Origin or Short Note */}
          {product.origin && (
            <p className="text-[11px] text-[#8C5D1F] font-medium mb-1">
              {getLocalizedText(product.origin, language)}
            </p>
          )}

          {/* Description */}
          {product.description && (
            <p className="text-xs text-[#615446] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2.5 font-normal">
              {getLocalizedText(product.description, language)}
            </p>
          )}

          {/* Tags Display */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 mb-2">
              {product.tags.slice(0, 3).map((tagId) => {
                const tag = tagsMap[tagId];
                if (!tag) return null;

                const isSignature = tagId === 'signature';
                const isPopular = tagId === 'popular';
                const isLocal = tagId === 'local_shahroud';

                let badgeClass = 'bg-[#F2ECE1] text-[#6A5A4A] border-[#E3D9C8]';
                if (isSignature) {
                  badgeClass = 'bg-[#FDF4E5] text-[#8C5D1F] border-[#F2D7A5] font-semibold';
                } else if (isPopular) {
                  badgeClass = 'bg-[#FDF0EE] text-[#A34836] border-[#F8D2CC]';
                } else if (isLocal) {
                  badgeClass = 'bg-[#EBF5F1] text-[#2C6E56] border-[#C3E4D6]';
                }

                return (
                  <span
                    key={tagId}
                    className={`inline-flex items-center text-[10px] px-1.5 py-0.5 rounded-md border ${badgeClass}`}
                  >
                    {isSignature && <Sparkles className="w-2.5 h-2.5 me-0.5" />}
                    {getLocalizedText(tag.label, language)}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Thumbnail Image (Photo Mode Only) */}
        {hasImage && product.image && (
          <div className="flex-none relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#ECE3D4] border border-[#E2D5C1]">
            <Image
              src={product.image}
              alt={getLocalizedText(product.imageAlt || product.name, language)}
              fill
              sizes="(max-width: 640px) 80px, 96px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {product.isCurated && (
              <div className="absolute bottom-1 end-1 bg-[#1A1815]/90 backdrop-blur-xs text-[#D4A359] p-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Row: Price & Subtle Action Hint */}
      <div className="pt-2.5 mt-2 border-t border-[#F2ECE1] flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-sm sm:text-base font-extrabold text-[#8C5D1F] tracking-tight">
            {formatPrice(product.price, language)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-[#A0907E] group-hover:text-[#1A1815] transition-colors">
          {product.prepTimeMinutes && (
            <span className="inline-flex items-center gap-0.5 text-[10px] text-[#8C7C6B]">
              <Clock className="w-3 h-3" />
              {product.prepTimeMinutes} {language === 'en' ? 'min' : 'دقیقه'}
            </span>
          )}
          <span className="text-xs font-semibold text-[#8C5D1F] underline underline-offset-2">
            {language === 'en' ? 'Details' : language === 'ar' ? 'التفاصيل' : 'مشاهده جزئیات'}
          </span>
        </div>
      </div>
    </article>
  );
}
