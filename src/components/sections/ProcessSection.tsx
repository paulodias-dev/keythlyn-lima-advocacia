import { PROCESS_CONTENT } from '../../data/landingContent';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function ProcessSection() {
  return (
    <section
      id="atendimento"
      aria-labelledby="process-heading"
      className="bg-[#181715] text-[#FAF9F6] py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-[#2E2B27]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C59B4E]">
              {PROCESS_CONTENT.sectionLabel}
            </p>
            <h2
              id="process-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.625rem] font-semibold leading-tight text-[#FAF9F6] tracking-[0.01em]"
            >
              {PROCESS_CONTENT.title}
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#CFC9BE]">
            {PROCESS_CONTENT.subtitle}
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_CONTENT.steps.map((step) => (
            <li
              key={step.number}
              className="bg-[#211F1C] border border-[#33302B] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-semibold text-[#C59B4E] tabular-nums">
                  {step.number}.
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#FAF9F6]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[0.9375rem] leading-relaxed text-[#D8D3C9]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 pt-8 border-t border-[#2E2B27] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm sm:text-base text-[#D8D3C9]">
            Iniciar o primeiro contato permite compreender sua demanda e avaliar as medidas cabíveis.
          </p>
          <WhatsAppButton
            label="Iniciar primeiro contato"
            location="process_section"
            variant="light"
          />
        </div>
      </div>
    </section>
  );
}
