import { useState, type FormEvent } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { ASSETS, CONTACT_CONTENT, PRACTICE_AREAS_CONTENT } from '../../data/landingContent';
import { trackEvent, trackWhatsAppClick } from '../../utils/analytics';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import { OptimizedImage } from '../ui/OptimizedImage';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function ContactSection() {
  const [clientName, setClientName] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(PRACTICE_AREAS_CONTENT.items[0].title);
  const [attendanceMode, setAttendanceMode] = useState<'Online' | 'Presencial (Goiânia)'>('Online');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [preparedLink, setPreparedLink] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = clientName.trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Por favor, informe seu nome para personalizar o contato.');
      setPreparedLink(null);
      return;
    }

    setErrorMessage(null);

    const url = buildWhatsAppUrl({
      clientName: trimmedName,
      topic: selectedTopic,
      mode: attendanceMode,
    });

    setPreparedLink(url);

    trackEvent('lead_pre_triage_submit', {
      event_category: 'conversion',
      practice_area: selectedTopic,
      attendance_mode: attendanceMode,
    });
    trackWhatsAppClick('contact_form_submit', selectedTopic);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="bg-[#F4F1EC] py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Coluna 1: Autoridade Profissional e CTA Direto */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F6520]">
                {CONTACT_CONTENT.sectionLabel}
              </p>
              <h2
                id="contact-heading"
                className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.625rem] font-semibold leading-tight text-[#181715]"
              >
                {CONTACT_CONTENT.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#524E48] max-w-xl">
                {CONTACT_CONTENT.description}
              </p>

              <div className="mt-8">
                <WhatsAppButton
                  label={CONTACT_CONTENT.ctaLabel}
                  location="contact_direct_cta"
                  variant="primary"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Bloco de Identificação Profissional + Retrato */}
            <div className="mt-10 pt-8 border-t border-[#E4DFD5] flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-24 sm:w-28 aspect-[4/5] shrink-0 bg-white border border-[#E4DFD5] p-1 overflow-hidden">
                <OptimizedImage
                  asset={ASSETS.contactPortrait}
                  sizes="120px"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-1 text-sm text-[#524E48]">
                <p className="font-serif text-xl font-semibold text-[#181715]">
                  {CONTACT_CONTENT.lawyerName}
                </p>
                <p className="font-semibold text-[#181715]">
                  {CONTACT_CONTENT.lawyerRole}
                </p>
                <p className="pt-1">{CONTACT_CONTENT.attendance}</p>
                <p>{CONTACT_CONTENT.location}</p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Triagem Rápida Opcional para WhatsApp */}
          <div className="lg:col-span-6">
            <div className="h-full bg-[#FAF9F6] border border-[#E4DFD5] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#181715]">
                  Direcionamento de atendimento
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#524E48]">
                  Se preferir, selecione o tema e a modalidade para gerar uma mensagem organizada diretamente para o WhatsApp do escritório.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#181715]"
                    >
                      Seu nome
                    </label>
                    <input
                      id="lead-name"
                      name="clientName"
                      type="text"
                      autoComplete="name"
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                        if (preparedLink) setPreparedLink(null);
                      }}
                      placeholder="Digite seu nome completo"
                      aria-invalid={Boolean(errorMessage)}
                      aria-describedby={errorMessage ? 'lead-name-error' : undefined}
                      className="mt-2 w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D4CEC3] text-sm text-[#181715] placeholder:text-[#787268] focus:border-[#181715] focus:outline-none"
                    />
                    {errorMessage && (
                      <p id="lead-name-error" role="alert" className="mt-1.5 text-xs font-medium text-[#8B1E24]">
                        {errorMessage}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lead-topic"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#181715]"
                    >
                      Assunto em Direito de Família
                    </label>
                    <select
                      id="lead-topic"
                      name="topic"
                      value={selectedTopic}
                      onChange={(e) => {
                        setSelectedTopic(e.target.value);
                        if (preparedLink) setPreparedLink(null);
                      }}
                      className="mt-2 w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D4CEC3] text-sm text-[#181715] focus:border-[#181715] focus:outline-none"
                    >
                      {PRACTICE_AREAS_CONTENT.items.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                      <option value="Outra questão em Direito de Família">
                        Outra questão em Direito de Família
                      </option>
                    </select>
                  </div>

                  <fieldset>
                    <legend className="text-xs font-semibold uppercase tracking-[0.1em] text-[#181715]">
                      Modalidade de preferência
                    </legend>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {(['Online', 'Presencial (Goiânia)'] as const).map((mode) => {
                        const isSelected = attendanceMode === mode;
                        return (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => {
                              setAttendanceMode(mode);
                              if (preparedLink) setPreparedLink(null);
                            }}
                            aria-pressed={isSelected}
                            className={`min-h-[44px] px-3 py-2 text-xs sm:text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                              isSelected
                                ? 'bg-[#181715] text-[#FAF9F6] border-[#181715]'
                                : 'bg-white text-[#524E48] border-[#D4CEC3] hover:border-[#181715] hover:text-[#181715]'
                            }`}
                          >
                            {mode}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] px-6 py-3.5 bg-[#181715] text-[#FAF9F6] hover:bg-[#2C2A26] text-sm font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    Preparar mensagem para WhatsApp
                  </button>
                </form>
              </div>

              {preparedLink && (
                <div
                  role="status"
                  className="mt-6 p-4 bg-[#EAF3ED] border border-[#135D36]/30 text-[#181715] space-y-3"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#135D36] shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm leading-snug">
                      Atendimento estruturado para <strong className="font-semibold">{clientName.trim()}</strong> ({selectedTopic} · {attendanceMode}).
                    </p>
                  </div>
                  <a
                    href={preparedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('contact_prepared_link', selectedTopic)}
                    className="inline-flex w-full items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-[#135D36] text-white hover:bg-[#0E4729] text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Abrir conversa no WhatsApp agora</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
