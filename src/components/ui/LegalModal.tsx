import { useEffect } from 'react';
import { X } from 'lucide-react';
import { LAWYER_PROFILE } from '../../data/landingContent';

export type LegalModalType = 'privacy' | 'lgpd' | 'cookies' | null;

interface LegalModalProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export function LegalModal({ activeModal, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const isPrivacy = activeModal === 'privacy';
  const isCookies = activeModal === 'cookies';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181715]/70 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#FAF9F6] border border-[#E4DFD5] p-6 sm:p-8 text-[#181715]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E4DFD5]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F6520]">
              {LAWYER_PROFILE.brandFullTitle} · {LAWYER_PROFILE.oab}
            </p>
            <h2
              id="legal-modal-title"
              className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-[#181715]"
            >
              {isPrivacy ? 'Política de Privacidade' : isCookies ? 'Política de Cookies' : 'Proteção de Dados (LGPD)'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="inline-flex items-center justify-center w-10 h-10 text-[#524E48] hover:text-[#181715] border border-[#E4DFD5] hover:border-[#181715] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-[#524E48]">
          {isPrivacy ? (
            <>
              <p>
                Esta página tem finalidade exclusivamente informativa e institucional, em conformidade com o Estatuto da
                Advocacia e o Código de Ética e Disciplina da OAB, apresentando os serviços e a atuação profissional de{' '}
                <strong className="text-[#181715] font-semibold">{LAWYER_PROFILE.fullName}</strong> ({LAWYER_PROFILE.oab}).
              </p>
              <p>
                Ao utilizar o botão de contato via WhatsApp ou preencher o direcionamento inicial de assunto, as
                informações fornecidas voluntariamente serão utilizadas unicamente para o atendimento da solicitação de
                orientação jurídica, sob sigilo profissional.
              </p>
              <p>
                Não comercializamos, cedemos ou compartilhamos dados pessoais com terceiros para fins publicitários.
                Cookies essenciais e métricas agregadas de navegação podem ser utilizados apenas para aprimorar a
                estabilidade e a acessibilidade do site.
              </p>
            </>
          ) : isCookies ? (
            <>
              <p>Este site utiliza cookies essenciais para funcionar corretamente e, somente mediante sua autorização, cookies de análise do Google Analytics para compreender o uso agregado da página.</p>
              <p>Os cookies de análise são opcionais, não são usados para publicidade e ficam desativados até que você aceite. Você pode recusar ou alterar sua escolha a qualquer momento pelo botão “Preferências de cookies” no rodapé.</p>
              <p>A preferência é armazenada neste dispositivo. O Google pode tratar dados conforme sua própria <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">política de privacidade</a>.</p>
            </>
          ) : (
            <>
              <p>
                O tratamento de dados pessoais decorrente dos contatos realizados por meio desta página observa a Lei
                Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD) e as normas éticas aplicáveis à
                advocacia.
              </p>
              <p>
                <strong className="text-[#181715] font-semibold">Finalidade:</strong> análise preliminar da demanda
                apresentada pelo titular e viabilização de comunicação para agendamento de atendimento presencial em
                Goiânia – Goiás ou online.
              </p>
              <p>
                <strong className="text-[#181715] font-semibold">Direitos do titular:</strong> você pode solicitar, a
                qualquer momento, a confirmação da existência de tratamento, o acesso, a correção ou a eliminação de
                dados pessoais tratados em decorrência do contato inicial, observadas as hipóteses legais de guarda.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E4DFD5] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold bg-[#181715] text-[#FAF9F6] hover:bg-[#2C2A26] transition-colors cursor-pointer whitespace-nowrap"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
