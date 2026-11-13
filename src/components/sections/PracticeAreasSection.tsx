import { ArrowUpRight } from 'lucide-react';
import { PRACTICE_AREAS_CONTENT } from '../../data/landingContent';
import { trackPracticeAreaSelect, trackWhatsAppClick } from '../../utils/analytics';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export function PracticeAreasSection() {
  return (
    <section
      id="atuacao"
      aria-labelledby="practice-areas-heading"
      className="bg-[#F4F1EC] py-16 sm:py-24 border-b border-[#E4DFD5]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F6520]">
            {PRACTICE_AREAS_CONTENT.sectionLabel}
          </p>
          <h2
            id="practice-areas-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.625rem] font-semibold leading-tight text-[#181715]"
          >
            {PRACTICE_AREAS_CONTENT.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#524E48]">
            {PRACTICE_AREAS_CONTENT.subtitle}
          </p>
        </div>

        {/* Grade assimétrica editorial: destaques principais + lista estruturada */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS_CONTENT.items.map((area) => {
            const whatsappHref = buildWhatsAppUrl({ topic: area.whatsappContext });

            return (
              <article
                key={area.id}
                className="group bg-[#FAF9F6] border border-[#E4DFD5] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-150 hover:border-[#8F6520]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E4DFD5]">
                    <span className="font-serif text-2xl font-semibold text-[#8F6520] tabular-nums">
                      {area.number}.
                    </span>
                    <span className="text-xs font-medium text-[#524E48]">
                      Direito de Família
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl sm:text-2xl font-semibold leading-snug text-[#181715]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-[0.9375rem] leading-relaxed text-[#524E48]">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4DFD5]/80">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackPracticeAreaSelect(area.title);
                      trackWhatsAppClick('practice_area_card', area.whatsappContext);
                    }}
                    aria-label={`Solicitar orientação sobre ${area.title} pelo WhatsApp`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#135D36] hover:text-[#0E4729] transition-colors"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
