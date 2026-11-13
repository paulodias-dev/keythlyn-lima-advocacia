import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';
import { ASSETS, FOOTER_CONTENT, LAWYER_PROFILE } from '../../data/landingContent';
import { OptimizedImage } from '../ui/OptimizedImage';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { LegalModal, type LegalModalType } from '../ui/LegalModal';
import { CookieConsent } from '../ui/CookieConsent';
import { trackEvent } from '../../utils/analytics';

interface BaseLayoutProps {
  children: ReactNode;
}

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

export function BaseLayout({ children }: BaseLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollToTop(window.scrollY > 420);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#181715]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#181715] focus:text-[#FAF9F6] focus:text-sm focus:font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E4DFD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
          {/* Zona 1: Marca (elemento único, sem subtítulos ou badges no header) */}
          <a
            href="#inicio"
            className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#181715] whitespace-nowrap shrink-0"
          >
            {LAWYER_PROFILE.brandName}
          </a>

          {/* Zona 2: Links de navegação concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#524E48]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => trackEvent('navigation_click', { link_text: link.label, link_target: link.href, navigation_location: 'header' })}
                className="hover:text-[#181715] underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: 1 ação primária + botão de menu mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">
              <WhatsAppButton
                label="Falar no WhatsApp"
                location="header"
                variant="compact"
              />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-[#E4DFD5] bg-white text-[#181715] hover:border-[#181715] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile acessível */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-drawer"
            aria-label="Menu de navegação móvel"
            className="md:hidden border-t border-[#E4DFD5] bg-[#FAF9F6] px-4 py-4 space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-2 text-base font-medium text-[#181715] border-b border-[#E4DFD5]/60 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 sm:hidden">
              <WhatsAppButton
                label="Falar no WhatsApp"
                location="mobile_menu"
                variant="primary"
                fullWidth
              />
            </div>
          </nav>
        )}
      </header>

      <main id="conteudo-principal" className="flex-1">
        {children}
      </main>

      <footer className="bg-[#F4F1EC] border-t border-[#E4DFD5] text-[#524E48] pt-12 pb-24 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E4DFD5]">
            <div className="md:col-span-5 flex items-start gap-5">
              <div className="w-20 h-24 shrink-0 bg-white border border-[#E4DFD5] overflow-hidden p-1.5">
                <OptimizedImage
                  asset={ASSETS.brandLogo}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-[#181715]">
                  {LAWYER_PROFILE.fullName}
                </p>
                <p className="mt-1 text-sm font-medium text-[#181715]">
                  {LAWYER_PROFILE.role}
                </p>
                <p className="mt-2 text-sm text-[#524E48]">
                  {LAWYER_PROFILE.specialty} · {LAWYER_PROFILE.city}
                </p>
                <p className="mt-1 text-sm text-[#524E48]">
                  {LAWYER_PROFILE.attendanceMode}
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8F6520]">
                Navegação
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                onClick={() => trackEvent('navigation_click', { link_text: link.label, link_target: link.href, navigation_location: 'footer' })}
                      className="text-[#524E48] hover:text-[#181715] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8F6520]">
                Aviso Legal
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#524E48]">
                {FOOTER_CONTENT.disclaimer}
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#524E48]">
            <p>
              © {new Date().getFullYear()} {LAWYER_PROFILE.fullName} · {LAWYER_PROFILE.oab}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-[#181715] underline underline-offset-4 cursor-pointer"
              >
                Política de Privacidade
              </button>
              <span aria-hidden="true">|</span>
              <button type="button" onClick={() => { setActiveLegalModal('cookies'); window.dispatchEvent(new Event('cookie-preferences')); }} className="hover:text-[#181715] underline underline-offset-4 cursor-pointer">
                Preferências de Cookies
              </button>
              <span aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setActiveLegalModal('lgpd')}
                className="hover:text-[#181715] underline underline-offset-4 cursor-pointer"
              >
                Proteção de Dados
              </button>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#524E48]">
            Desenvolvido por{' '}
            <a
              href="https://fluxosistemas.com.br"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-[#181715] transition-colors"
            >
              Fluxo Sistemas
            </a>
          </p>
        </div>
      </footer>

      {/* Barra fixa inferior compacta apenas no mobile (respeitando limite <= 15% da altura) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-sm border-t border-[#E4DFD5] px-4 py-2">
        <WhatsAppButton
          label="Falar pelo WhatsApp"
          location="mobile_sticky_bar"
          variant="compact"
          fullWidth
          className="min-h-[44px]"
        />
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
        className={`fixed right-4 bottom-20 md:right-8 md:bottom-8 z-30 inline-flex h-11 w-11 items-center justify-center border border-[#8F6520] bg-[#FAF9F6]/95 text-[#8F6520] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#8F6520] hover:text-white ${
          showScrollToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>

      <LegalModal
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
      <CookieConsent onPreferences={() => setActiveLegalModal('cookies')} />
    </div>
  );
}
