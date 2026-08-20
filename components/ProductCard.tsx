'use client';

import React from 'react';
import Image from 'next/image';
import { Product, Tag, Language } from '@/types/menu';
import { formatPrice, getLocalizedText, formatNumber } from '@/lib/utils';
import { Sparkles, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

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
  const isLongPrep = Boolean(product.prepTimeMinutes && product.prepTimeMinutes > 10);

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
      className="group relative bg-[#26211C] hover:bg-[#2D2721] rounded-lg p-3 sm:p-3.5 border border-[#352D25] hover:border-[#BD9557]/50 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs"
    >
      <div className="flex gap-3 sm:gap-4">
        {/* Text Details Area */}
        <div className="flex-1 min-w-0">
          {/* Header Row: Title & Price */}
          <div className="flex items-baseline justify-between gap-2 border-b border-dotted border-[#3D3328] pb-1.5 mb-1.5">
            <h3 className="font-serif text-sm sm:text-base text-[#FAF6F0] font-semibold group-hover:text-[#BD9557] transition-colors leading-snug">
              {getLocalizedText(product.name, language)}
            </h3>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#E2D6C5] shrink-0">
              {formatPrice(product.price, language)}
            </span>
          </div>

          {/* Optional Origin or Short Note */}
          {product.origin && (
            <p className="text-[11px] text-[#BD9557] font-normal mb-1">
              {getLocalizedText(product.origin, language)}
            </p>
          )}

          {/* Description with comfortable Persian line-height (1.9-2.0) */}
          {product.description && (
            <p className="text-xs text-[#A89C8C] leading-[1.9] line-clamp-2 sm:line-clamp-3 mb-2 font-normal">
              {getLocalizedText(product.description, language)}
            </p>
          )}

          {/* Quiet Informational Tags (Readable text labels, not clickable chips) */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#8C8070] font-mono">
              {product.tags.slice(0, 3).map((tagId, idx, arr) => {
                const tag = tagsMap[tagId];
                if (!tag) return null;
                const isSignature = tagId === 'signature';

                return (
                  <span
                    key={tagId}
                    className={`inline-flex items-center ${
                      isSignature ? 'text-[#BD9557] font-semibold' : ''
                    }`}
                  >
                    {isSignature && <Sparkles className="w-2.5 h-2.5 me-0.5" />}
                    {getLocalizedText(tag.label, language)}
                    {idx < arr.length - 1 && (
                      <span className="mx-1 text-[#473E34]">·</span>
                    )}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Thumbnail Image (Photo Mode Only) */}
        {hasImage && product.image && (
          <div className="flex-none relative w-18 h-18 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-[#1E1A17] border border-[#352D25]">
            <Image
              src={product.image}
              alt={getLocalizedText(product.imageAlt || product.name, language)}
              fill
              sizes="(max-width: 640px) 72px, 80px"
              className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      {/* Card Footer: Long-prep indicator (only if >10 min) and Details Link */}
      <div className="pt-2 mt-2 border-t border-[#312921] flex items-center justify-between text-[10px]">
        {isLongPrep ? (
          <span className="inline-flex items-center gap-1 text-[#9E8B75]">
            <Clock className="w-3 h-3 text-[#BD9557]" />
            <span>±{formatNumber(product.prepTimeMinutes!, language)} {language === 'en' ? 'min' : 'دقیقه'}</span>
          </span>
        ) : (
          <span />
        )}
        <span className="text-[#8E806F] group-hover:text-[#BD9557] transition-colors flex items-center gap-0.5 font-medium">
          <span>{language === 'en' ? 'Details' : 'جزئیات'}</span>
          {isRtl ? (
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
          ) : (
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          )}
        </span>
      </div>
    </article>
  );
}

