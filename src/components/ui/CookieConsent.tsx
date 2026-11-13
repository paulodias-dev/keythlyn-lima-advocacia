import { useEffect, useState } from 'react';
import { ANALYTICS_CONSENT_KEY, initGA4, trackEvent } from '../../utils/analytics';

export function CookieConsent({ onPreferences }: { onPreferences: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(localStorage.getItem(ANALYTICS_CONSENT_KEY) === null);
    const showPreferences = () => setVisible(true);
    window.addEventListener('cookie-preferences', showPreferences);
    return () => window.removeEventListener('cookie-preferences', showPreferences);
  }, []);

  const choose = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    setVisible(false);
    if (value === 'accepted') {
      initGA4();
      trackEvent('cookie_consent', { consent_status: value });
    }
  };

  if (!visible) return null;
  return (
    <aside className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#E4DFD5] bg-[#FAF9F6] p-4 shadow-[0_-4px_20px_rgba(24,23,21,0.12)]" aria-label="Aviso de cookies">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-xs leading-relaxed text-[#524E48] sm:text-sm">Usamos cookies essenciais e, com sua autorização, cookies de análise para melhorar o site. <button type="button" onClick={onPreferences} className="font-semibold underline underline-offset-2">Política de Cookies</button>.</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => choose('rejected')} className="min-h-10 border border-[#BEB8AD] px-4 text-xs font-semibold text-[#524E48]">Recusar</button>
          <button type="button" onClick={() => choose('accepted')} className="min-h-10 bg-[#181715] px-4 text-xs font-semibold text-[#FAF9F6]">Aceitar análise</button>
        </div>
      </div>
    </aside>
  );
}
