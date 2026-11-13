export interface GA4EventParams {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
export const ANALYTICS_CONSENT_KEY = 'keythlyn_analytics_consent';

let gaInitialized = false;

export function hasAnalyticsConsent(): boolean {
  return typeof window !== 'undefined' && window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'accepted';
}

export function initGA4(): void {
  if (typeof window === 'undefined' || gaInitialized || !hasAnalyticsConsent()) return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.trim().length > 0) {
    const existingScript = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
      document.head.appendChild(script);
    }

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      anonymize_ip: true,
    });
  }

  gaInitialized = true;
}

export function trackEvent(eventName: string, params: GA4EventParams = {}): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;

  window.dataLayer = window.dataLayer || [];
  const payload = {
    event_category: 'engagement',
    ...params,
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  } else {
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }
}

export function trackWhatsAppClick(location: string, topic?: string): void {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    method: 'whatsapp',
    cta_location: location,
    practice_area: topic || 'geral',
    currency: 'BRL',
    value: 1,
  });

  trackEvent('contact_whatsapp', {
    event_category: 'conversion',
    cta_location: location,
    practice_area: topic || 'geral',
  });
}

export function trackFAQToggle(questionId: string, expanded: boolean): void {
  trackEvent('faq_interaction', {
    event_category: 'content',
    question_id: questionId,
    action: expanded ? 'expand' : 'collapse',
  });
}

export function trackPracticeAreaSelect(areaTitle: string): void {
  trackEvent('select_practice_area', {
    event_category: 'interest',
    practice_area: areaTitle,
  });
}
