import { ArrowDownRight } from 'lucide-react';
import { ASSETS, HERO_CONTENT, LAWYER_PROFILE } from '../../data/landingContent';
import { OptimizedImage } from '../ui/OptimizedImage';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative bg-[#FAF9F6] border-b border-[#E4DFD5]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Editorial Principal */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#8F6520]">
              {HERO_CONTENT.kicker}
            </p>

            <h1
              id="hero-heading"
              className="mt-4 font-serif text-[clamp(2.15rem,4vw,3.55rem)] font-semibold leading-[1.12] tracking-tight text-[#181715]"
            >
              {HERO_CONTENT.headline}
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl text-base sm:text-[1.0625rem] leading-relaxed text-[#524E48]">
              {HERO_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* CTAs estratégicos: 1 CTA primário para WhatsApp + 1 âncora discreta */}
            <div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-4">
              <WhatsAppButton
                label={HERO_CONTENT.primaryCtaLabel}
                location="hero_primary"
                variant="primary"
                className="w-full sm:w-auto"
              />

              <a
                href="#atuacao"
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-3 text-sm font-semibold text-[#181715] hover:text-[#8F6520] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{HERO_CONTENT.secondaryCtaLabel}</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Metadados institucionais sem caixas/pílulas */}
            <div className="mt-10 pt-6 border-t border-[#E4DFD5] w-full flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[#524E48]">
              <span className="text-[#181715]">{HERO_CONTENT.attendanceNote}</span>
              <span aria-hidden="true" className="text-[#8F6520]">·</span>
              <span>{HERO_CONTENT.locationNote}</span>
              <span aria-hidden="true" className="text-[#8F6520]">·</span>
              <span>{LAWYER_PROFILE.oab}</span>
            </div>
          </div>

          {/* Coluna Visual: Retrato de Autoridade */}
          <div className="lg:col-span-5">
            <figure className="bg-white border border-[#E4DFD5] p-2.5 sm:p-3">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#F4F1EC]">
                <OptimizedImage
                  asset={ASSETS.heroPortrait}
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <figcaption className="pt-3 pb-1 px-1 flex items-center justify-between gap-3 text-xs text-[#524E48]">
                <span className="font-medium text-[#181715] truncate">
                  {LAWYER_PROFILE.fullName}
                </span>
                <span className="shrink-0 tabular-nums font-medium text-[#8F6520]">
                  {LAWYER_PROFILE.oab}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
