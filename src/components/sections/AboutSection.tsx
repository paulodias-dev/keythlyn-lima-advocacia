import { ABOUT_CONTENT, ASSETS } from '../../data/landingContent';
import { OptimizedImage } from '../ui/OptimizedImage';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="bg-[#FAF9F6] py-16 sm:py-24 border-b border-[#E4DFD5]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Retrato no escritório */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white border border-[#E4DFD5] p-2.5 sm:p-3">
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#F4F1EC]">
                <OptimizedImage
                  asset={ASSETS.aboutPortrait}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Biografia e Pilares de Atuação */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F6520]">
              {ABOUT_CONTENT.sectionLabel}
            </p>

            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.625rem] font-semibold leading-tight text-[#181715]"
            >
              {ABOUT_CONTENT.name}
            </h2>

            <p className="mt-2 text-sm sm:text-base font-semibold text-[#524E48]">
              {ABOUT_CONTENT.credential}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#524E48]">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-8 pt-8 border-t border-[#E4DFD5] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {ABOUT_CONTENT.pillars.map((pillar) => (
                <div key={pillar.label}>
                  <dt className="text-sm font-semibold text-[#181715]">{pillar.label}</dt>
                  <dd className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#524E48]">
                    {pillar.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <WhatsAppButton
                label="Agendar orientação pelo WhatsApp"
                location="about_section"
                variant="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
