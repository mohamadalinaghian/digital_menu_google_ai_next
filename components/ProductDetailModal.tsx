'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Product, Tag, Language } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { formatPrice, getLocalizedText, formatNumber } from '@/lib/utils';
import {
  X,
  Sparkles,
  Clock,
  Flame,
  Layers,
  HeartHandshake,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  tagsMap: Record<string, Tag>;
  language: Language;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  tagsMap,
  language,
  onClose,
}: ProductDetailModalProps) {
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#100E0C]/80 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#241F1A] rounded-t-2xl sm:rounded-lg max-h-[90vh] overflow-y-auto border border-[#3A3127] shadow-2xl text-[#EAE3D7]"
      >
        {/* Close Button */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          className="absolute top-3.5 end-3.5 z-20 w-8 h-8 rounded-full bg-[#1A1714]/80 hover:bg-[#1A1714] text-[#EAE3D7] flex items-center justify-center transition-colors border border-[#3A3127] cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Banner (if available) */}
        {product.image && (
          <div className="relative w-full h-56 sm:h-64 bg-[#1C1814] overflow-hidden">
            <Image
              src={product.image}
              alt={getLocalizedText(product.imageAlt || product.name, language)}
              fill
              sizes="(max-width: 640px) 100vw, 500px"
              className="object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241F1A] via-transparent to-black/40" />
          </div>
        )}

        <div className="p-5 sm:p-6 space-y-4">
          {/* Header & Badges */}
          <div>
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mb-2 text-xs font-mono text-[#8C8070]">
                {product.tags.map((tagId) => {
                  const tag = tagsMap[tagId];
                  if (!tag) return null;
                  const isSignature = tagId === 'signature';
                  return (
                    <span
                      key={tagId}
                      className={`inline-flex items-center px-2 py-0.5 rounded ${
                        isSignature
                          ? 'bg-[#362C21] text-[#BD9557] font-semibold border border-[#BD9557]/40'
                          : 'bg-[#2D2721] text-[#8C8070] border border-[#3A3229]'
                      }`}
                    >
                      {isSignature && <Sparkles className="w-3 h-3 me-1" />}
                      {getLocalizedText(tag.label, language)}
                    </span>
                  );
                })}
              </div>
            )}

            <h3
              id="modal-product-title"
              className="text-xl sm:text-2xl font-serif text-[#EAE3D7] leading-snug font-normal"
            >
              {getLocalizedText(product.name, language)}
            </h3>

            {product.origin && (
              <p className="text-xs text-[#BD9557] font-light mt-1">
                {getLocalizedText(product.origin, language)}
              </p>
            )}
          </div>

          {/* Price Bar */}
          <div className="flex items-center justify-between p-3 rounded bg-[#2D2721] border border-[#3A3229]">
            <span className="text-xs font-serif text-[#8C8070]">
              {t.price}
            </span>
            <span className="text-lg font-mono font-bold text-[#EAE3D7]">
              {formatPrice(product.price, language)}
            </span>
          </div>

          {/* Full Description */}
          {product.description && (
            <div className="space-y-1">
              <h4 className="text-xs font-serif text-[#8C8070] tracking-wider">
                {t.ingredients}
              </h4>
              <p className="text-xs sm:text-sm text-[#C4B7A5] leading-relaxed font-normal bg-[#2A241E] p-3 rounded border border-[#352D25]">
                {getLocalizedText(product.description, language)}
              </p>
            </div>
          )}

          {/* Curated Note if exists */}
          {product.curatedNote && (
            <div className="p-3 rounded bg-[#2D261E] border border-[#BD9557]/30 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#BD9557] shrink-0 mt-0.5" />
              <p className="text-xs text-[#C9B9A3] leading-relaxed">
                {getLocalizedText(product.curatedNote, language)}
              </p>
            </div>
          )}

          {/* Quick Metrics: Prep time, Calories */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {product.prepTimeMinutes && (
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#2A241E] border border-[#352D25]">
                <Clock className="w-4 h-4 text-[#BD9557]" />
                <div className="text-start">
                  <div className="text-[10px] text-[#7D7162]">{t.prepTime}</div>
                  <div className="text-xs font-mono font-medium text-[#EAE3D7]">
                    ~{formatNumber(product.prepTimeMinutes, language)} {t.minutes}
                  </div>
                </div>
              </div>
            )}
            {product.calories && (
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#2A241E] border border-[#352D25]">
                <Flame className="w-4 h-4 text-[#C27365]" />
                <div className="text-start">
                  <div className="text-[10px] text-[#7D7162]">{t.calories}</div>
                  <div className="text-xs font-mono font-medium text-[#EAE3D7]">
                    ~{formatNumber(product.calories, language)} kcal
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Customization Preview */}
          {product.customizationGroups && product.customizationGroups.length > 0 && (
            <div className="p-3 rounded bg-[#2A241E] border border-[#352D25] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-serif text-[#C4B7A5]">
                <Layers className="w-3.5 h-3.5 text-[#BD9557]" />
                <span>{t.customizationPreview}</span>
              </div>
              <div className="space-y-1.5">
                {product.customizationGroups.map((group) => (
                  <div key={group.id} className="text-xs text-[#9E9180]">
                    <span className="font-medium text-[#EAE3D7]">
                      {getLocalizedText(group.title, language)}:{' '}
                    </span>
                    {group.options.map((opt, idx) => (
                      <span key={opt.id} className="text-[#8C8070]">
                        {getLocalizedText(opt.name, language)}
                        {idx < group.options.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Table Service Hospitality Notice */}
          <div className="p-3 rounded bg-[#1C1815] text-[#C4B7A5] text-xs flex items-center justify-between border border-[#352D25]">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#BD9557]" />
              <span>{t.orderNotice}</span>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#3A3229] hover:bg-[#4D4236] text-[#EAE3D7] text-xs rounded transition-colors cursor-pointer border border-[#4D4236]"
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
