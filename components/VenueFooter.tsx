'use client';

import React, { useState } from 'react';
import { VenueInfo, Language } from '@/types/menu';
import { translations } from '@/lib/i18n';
import { getLocalizedText } from '@/lib/utils';
import {
  MapPin,
  Clock,
  Wifi,
  Phone,
  Instagram,
  Copy,
  Check,
  Share2,
} from 'lucide-react';

interface VenueFooterProps {
  venue: VenueInfo;
  language: Language;
}

export default function VenueFooter({ venue, language }: VenueFooterProps) {
  const t = translations[language];
  const [copiedWifi, setCopiedWifi] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleCopyWifi = () => {
    if (venue.wifiPassword && typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(venue.wifiPassword);
      setCopiedWifi(true);
      setTimeout(() => setCopiedWifi(false), 2500);
    }
  };

  const handleShareMenu = () => {
    if (typeof navigator !== 'undefined') {
      if (navigator.share) {
        navigator.share({
          title: getLocalizedText(venue.name, language),
          text: getLocalizedText(venue.tagline, language),
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2500);
      }
    }
  };

  return (
    <footer className="bg-[#191614] text-[#EAE3D7] border-t border-[#2A241E] pt-8 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Brand & Narrative */}
        <div className="text-center space-y-2 max-w-md mx-auto">
          <h3 className="font-serif text-lg text-[#EAE3D7] font-normal tracking-wider">
            {getLocalizedText(venue.name, language)}
          </h3>
          <p className="text-xs text-[#8E8272] leading-relaxed font-light">
            {getLocalizedText(venue.description, language)}
          </p>
        </div>

        {/* Info Grid: Address, Hours, Wi-Fi, Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Address & Hours */}
          <div className="p-3.5 rounded bg-[#221D19] border border-[#302821] space-y-2.5">
            {/* Open status badge moved gracefully from header */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-[#2E2721] text-xs">
              <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
              <span className="text-[#EAE3D7] font-medium tracking-wide">
                {t.openNow}
              </span>
              <span className="text-[11px] text-[#8E8272] ms-auto font-mono">
                {getLocalizedText(venue.hours, language)}
              </span>
            </div>

            <div className="flex items-start gap-2 text-xs text-[#C4B7A5]">
              <MapPin className="w-3.5 h-3.5 text-[#BD9557] shrink-0 mt-0.5" />
              <span>{getLocalizedText(venue.address, language)}</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-[#C4B7A5]">
              <Clock className="w-3.5 h-3.5 text-[#BD9557] shrink-0 mt-0.5" />
              <span>{t.hours}: {getLocalizedText(venue.hours, language)}</span>
            </div>
          </div>

          {/* Wi-Fi & Quick Actions */}
          <div className="p-3.5 rounded bg-[#221D19] border border-[#302821] space-y-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-[#C4B7A5]">
                <Wifi className="w-3.5 h-3.5 text-[#BD9557]" />
                <span>
                  {t.wifi}: <strong className="text-[#EAE3D7] font-mono">{venue.wifiSsid}</strong>
                </span>
              </div>
              {venue.wifiPassword && (
                <button
                  id="copy-wifi-btn"
                  onClick={handleCopyWifi}
                  className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#2C251F] hover:bg-[#382F27] text-[#BD9557] border border-[#3D332A] transition-colors cursor-pointer"
                >
                  {copiedWifi ? (
                    <>
                      <Check className="w-3 h-3 text-[#52B788]" />
                      <span className="text-[#52B788]">{t.copiedWifi}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{t.copyWifi}</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Social & Call buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={`tel:${venue.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#2C251F] hover:bg-[#382F27] text-xs text-[#EAE3D7] border border-[#3D332A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#BD9557]" />
                <span>{t.call}</span>
              </a>
              <a
                href={`https://instagram.com/${venue.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#2C251F] hover:bg-[#382F27] text-xs text-[#EAE3D7] border border-[#3D332A] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#BD9557]" />
                <span>@{venue.instagram}</span>
              </a>
              <button
                id="share-menu-btn"
                onClick={handleShareMenu}
                className="p-1.5 rounded bg-[#2C251F] hover:bg-[#382F27] text-[#C4B7A5] border border-[#3D332A] transition-colors cursor-pointer"
                title={t.shareMenu}
                aria-label={t.shareMenu}
              >
                {copiedShare ? (
                  <Check className="w-3.5 h-3.5 text-[#52B788]" />
                ) : (
                  <Share2 className="w-3.5 h-3.5 text-[#BD9557]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Respectful Hospitality Sign-off */}
        <div className="text-center pt-3 border-t border-[#26201A] text-[11px] text-[#7D7162]">
          <span>میزبانی با مهر در کافه-رستوران چینو شاهرود</span>
        </div>
      </div>
    </footer>
  );
}
