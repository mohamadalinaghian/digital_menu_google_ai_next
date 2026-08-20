'use client';

import React from 'react';
import Image from 'next/image';
import { Product, Tag, Language } from '@/types/menu';
import { formatPrice, getLocalizedText } from '@/lib/utils';
import { Sparkles, Clock } from 'lucide-react';

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
      className="group relative bg-[#26221E] rounded-lg p-3.5 sm:p-4 border border-[#352D25] hover:border-[#4D4236] transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div className="flex gap-3 sm:gap-4">
        {/* Text Details Area */}
        <div className="flex-1 min-w-0">
          {/* Header Row: Title & Price separated by dotted leader */}
          <div className="flex items-baseline justify-between gap-2 border-b border-dotted border-[#42372D] pb-1.5 mb-1.5">
            <h3 className="font-serif text-sm sm:text-base text-[#EAE3D7] group-hover:text-[#BD9557] transition-colors leading-snug font-normal">
              {getLocalizedText(product.name, language)}
            </h3>
            <span className="font-mono text-xs sm:text-sm font-medium text-[#D5C9B8] shrink-0">
              {formatPrice(product.price, language)}
            </span>
          </div>

          {/* Optional Origin or Short Note */}
          {product.origin && (
            <p className="text-[11px] text-[#BD9557] font-light mb-1">
              {getLocalizedText(product.origin, language)}
            </p>
          )}

          {/* Description */}
          {product.description && (
            <p className="text-xs text-[#9E9180] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 font-normal">
              {getLocalizedText(product.description, language)}
            </p>
          )}

          {/* Quiet Informational Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#7D7162] font-mono">
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
          <div className="flex-none relative w-18 h-18 sm:w-22 sm:h-22 rounded overflow-hidden bg-[#1E1A17] border border-[#352D25]">
            <Image
              src={product.image}
              alt={getLocalizedText(product.imageAlt || product.name, language)}
              fill
              sizes="(max-width: 640px) 72px, 88px"
              className="object-cover group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      {/* Subtle bottom detail hint */}
      {product.prepTimeMinutes && (
        <div className="pt-2 mt-2 border-t border-[#312921] flex items-center justify-between text-[10px] text-[#736758]">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            ~{product.prepTimeMinutes} {language === 'en' ? 'min' : 'دقیقه'}
          </span>
          <span className="text-[#8A7E70] group-hover:text-[#BD9557] transition-colors">
            {language === 'en' ? 'Details' : 'جزئیات'}
          </span>
        </div>
      )}
    </article>
  );
}
