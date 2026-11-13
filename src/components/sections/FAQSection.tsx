import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_CONTENT } from '../../data/landingContent';
import { trackFAQToggle } from '../../utils/analytics';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_CONTENT.items[0]?.id ?? null);

  const handleToggle = (id: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    trackFAQToggle(id, isOpening);
  };

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-heading"
      className="bg-[#FAF9F6] py-16 sm:py-24 border-b border-[#E4DFD5]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F6520]">
            {FAQ_CONTENT.sectionLabel}
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#181715]"
          >
            {FAQ_CONTENT.title}
          </h2>
        </div>

        <div className="mt-10 divide-y divide-[#E4DFD5] border-y border-[#E4DFD5]">
          {FAQ_CONTENT.items.map((item) => {
            const isExpanded = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => handleToggle(item.id)}
                    className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="font-serif text-xl sm:text-[1.375rem] font-semibold leading-snug text-[#181715] group-hover:text-[#8F6520] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-5 h-5 mt-1 shrink-0 text-[#8F6520] transition-transform duration-150 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isExpanded}
                  className={isExpanded ? 'pb-6 pr-8' : ''}
                >
                  <p className="text-base leading-relaxed text-[#524E48]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
