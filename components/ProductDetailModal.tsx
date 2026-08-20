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
  Info,
  Layers,
  HeartHandshake,
  Check,
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
  const isRtl = language !== 'en';

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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#141210]/70 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-y-auto border border-[#E6DEC8] shadow-2xl animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-200"
      >
        {/* Close Button Top Right */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          className="absolute top-3.5 end-3.5 z-20 w-8 h-8 rounded-full bg-[#1A1815]/75 hover:bg-[#1A1815] text-[#FAF7F2] flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Banner (if available) */}
        {product.image && (
          <div className="relative w-full h-56 sm:h-64 bg-[#ECE3D4] overflow-hidden">
            <Image
              src={product.image}
              alt={getLocalizedText(product.imageAlt || product.name, language)}
              fill
              sizes="(max-width: 640px) 100vw, 500px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/30" />
          </div>
        )}

        <div className="p-5 sm:p-6 space-y-4">
          {/* Header & Badges */}
          <div>
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                {product.tags.map((tagId) => {
                  const tag = tagsMap[tagId];
                  if (!tag) return null;
                  const isSignature = tagId === 'signature';
                  return (
                    <span
                      key={tagId}
                      className={`inline-flex items-center text-xs px-2 py-0.5 rounded-md border font-medium ${
                        isSignature
                          ? 'bg-[#FDF4E5] text-[#8C5D1F] border-[#F2D7A5]'
                          : 'bg-[#EDE4D5] text-[#5C5042] border-[#DDD1BE]'
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
              className="text-xl sm:text-2xl font-bold text-[#1A1815] leading-snug"
            >
              {getLocalizedText(product.name, language)}
            </h3>

            {product.origin && (
              <p className="text-xs font-semibold text-[#8C5D1F] mt-1">
                {getLocalizedText(product.origin, language)}
              </p>
            )}
          </div>

          {/* Price Bar */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#F0E8DC] border border-[#E2D5C1]">
            <span className="text-xs font-medium text-[#736352]">
              {t.price}
            </span>
            <span className="text-lg sm:text-xl font-black text-[#8C5D1F]">
              {formatPrice(product.price, language)}
            </span>
          </div>

          {/* Full Description */}
          {product.description && (
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#5C5042] uppercase tracking-wider">
                {t.ingredients}
              </h4>
              <p className="text-xs sm:text-sm text-[#3E342B] leading-relaxed font-normal bg-white p-3 rounded-xl border border-[#E9E0D0]">
                {getLocalizedText(product.description, language)}
              </p>
            </div>
          )}

          {/* Curated Note if exists */}
          {product.curatedNote && (
            <div className="p-3 rounded-xl bg-[#FBF3E6] border border-[#EED7B2] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#8C5D1F] shrink-0 mt-0.5" />
              <p className="text-xs text-[#6B502C] leading-relaxed">
                {getLocalizedText(product.curatedNote, language)}
              </p>
            </div>
          )}

          {/* Quick Metrics: Prep time, Calories */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {product.prepTimeMinutes && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E9E0D0]">
                <Clock className="w-4 h-4 text-[#8C5D1F]" />
                <div className="text-start">
                  <div className="text-[10px] text-[#8C7C6B]">{t.prepTime}</div>
                  <div className="text-xs font-bold text-[#1A1815]">
                    ~{formatNumber(product.prepTimeMinutes, language)} {t.minutes}
                  </div>
                </div>
              </div>
            )}
            {product.calories && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E9E0D0]">
                <Flame className="w-4 h-4 text-[#A34836]" />
                <div className="text-start">
                  <div className="text-[10px] text-[#8C7C6B]">{t.calories}</div>
                  <div className="text-xs font-bold text-[#1A1815]">
                    ~{formatNumber(product.calories, language)} kcal
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Future Ordering / Customization Ready Section */}
          {product.customizationGroups && product.customizationGroups.length > 0 && (
            <div className="p-3.5 rounded-xl bg-[#F7F2E8] border border-[#E5DAC8] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#5C5042]">
                <Layers className="w-3.5 h-3.5 text-[#8C5D1F]" />
                <span>{t.customizationPreview}</span>
              </div>
              <div className="space-y-1.5">
                {product.customizationGroups.map((group) => (
                  <div key={group.id} className="text-xs text-[#4A4035]">
                    <span className="font-semibold text-[#1A1815]">
                      {getLocalizedText(group.title, language)}:{' '}
                    </span>
                    {group.options.map((opt, idx) => (
                      <span key={opt.id} className="text-[#6A5B4D]">
                        {getLocalizedText(opt.name, language)}
                        {idx < group.options.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#8C7C6B] italic">
                {t.customizationNotice}
              </p>
            </div>
          )}

          {/* Table Service Hospitality Notice */}
          <div className="p-3 rounded-xl bg-[#1A1815] text-[#FAF7F2] text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#D4A359]" />
              <span>{t.orderNotice}</span>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#D4A359] hover:bg-[#C8933F] text-[#1A1815] font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
