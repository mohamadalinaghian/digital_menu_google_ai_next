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
  Heart,
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
    <footer className="bg-[#181613] text-[#FAF7F2] border-t border-[#2D261F] pt-8 pb-14 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Brand & Narrative */}
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-[#D4A359]/60" />
            <h3 className="text-xl font-bold tracking-tight text-[#FAF7F2]">
              {getLocalizedText(venue.name, language)}
            </h3>
            <span className="h-px w-6 bg-[#D4A359]/60" />
          </div>
          <p className="text-xs text-[#C4B59F] leading-relaxed font-light">
            {getLocalizedText(venue.description, language)}
          </p>
        </div>

        {/* Info Grid: Address, Hours, Wi-Fi, Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Address & Hours */}
          <div className="p-4 rounded-xl bg-[#231F1A] border border-[#352F26] space-y-2.5">
            <div className="flex items-start gap-2.5 text-xs text-[#D8C9B5]">
              <MapPin className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
              <span>{getLocalizedText(venue.address, language)}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#D8C9B5]">
              <Clock className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
              <span>{getLocalizedText(venue.hours, language)}</span>
            </div>
          </div>

          {/* Wi-Fi & Quick Actions */}
          <div className="p-4 rounded-xl bg-[#231F1A] border border-[#352F26] space-y-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-[#D8C9B5]">
                <Wifi className="w-4 h-4 text-[#D4A359]" />
                <span>
                  {t.wifi}: <strong className="text-white font-mono">{venue.wifiSsid}</strong>
                </span>
              </div>
              {venue.wifiPassword && (
                <button
                  id="copy-wifi-btn"
                  onClick={handleCopyWifi}
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-[#332C23] hover:bg-[#433A2E] text-[#D4A359] border border-[#4D4032] transition-colors cursor-pointer"
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
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#2E2820] hover:bg-[#3D352A] text-xs text-[#FAF7F2] border border-[#443A2E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>{t.call}</span>
              </a>
              <a
                href={`https://instagram.com/${venue.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#2E2820] hover:bg-[#3D352A] text-xs text-[#FAF7F2] border border-[#443A2E] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>@{venue.instagram}</span>
              </a>
              <button
                id="share-menu-btn"
                onClick={handleShareMenu}
                className="p-1.5 rounded-lg bg-[#2E2820] hover:bg-[#3D352A] text-[#D8C9B5] border border-[#443A2E] transition-colors cursor-pointer"
                title={t.shareMenu}
                aria-label={t.shareMenu}
              >
                {copiedShare ? (
                  <Check className="w-4 h-4 text-[#52B788]" />
                ) : (
                  <Share2 className="w-4 h-4 text-[#D4A359]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Respectful Hospitality Sign-off */}
        <div className="text-center pt-4 border-t border-[#28221B] text-[11px] text-[#8E8070] flex items-center justify-center gap-1">
          <span>میزبانی با مهر در کافه و رستوران چینو شاهرود</span>
          <Heart className="w-3 h-3 text-[#A34836] fill-[#A34836]/40 inline" />
        </div>
      </div>
    </footer>
  );
}
