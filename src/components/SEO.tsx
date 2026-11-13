import { useEffect } from 'react';
import { ASSETS, FAQ_CONTENT, LAWYER_PROFILE } from '../data/landingContent';
import { hasAnalyticsConsent, initGA4 } from '../utils/analytics';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  canonicalPath?: string;
  noIndex?: boolean;
}

const DEFAULT_SEO: Required<Omit<SEOProps, 'noIndex' | 'canonicalPath'>> = {
  title: 'Keythlyn Lima Advocacia | Direito de Família — OAB/GO 67.481',
  description:
    'Direito de Família com responsabilidade, atenção e orientação individualizada. Atendimento presencial em Goiânia – GO e online. Entre em contato pelo WhatsApp.',
  keywords:
    'Advogada Direito de Família Goiânia, Divórcio, Pensão Alimentícia, Guarda dos Filhos, Regulamentação de Convivência, Keythlyn Lima, OAB/GO 67.481',
  ogImage: ASSETS.heroPortrait.webp,
  ogImageAlt: ASSETS.heroPortrait.alt,
};

function upsertMetaTag(attribute: 'name' | 'property', key: string, content: string): void {
  if (typeof document === 'undefined') return;
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLinkTag(rel: string, href: string): void {
  if (typeof document === 'undefined') return;
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function SEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  ogImage = DEFAULT_SEO.ogImage,
  ogImageAlt = DEFAULT_SEO.ogImageAlt,
  canonicalPath,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    const scheduleAnalytics = hasAnalyticsConsent()
      ? (window.requestIdleCallback ? window.requestIdleCallback(() => initGA4(), { timeout: 2500 }) : window.setTimeout(() => initGA4(), 1200))
      : undefined;

    const origin = window.location.origin;
    const currentUrl = canonicalPath ? `${origin}${canonicalPath}` : `${origin}${window.location.pathname}`;
    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`;

    document.documentElement.lang = 'pt-BR';
    document.title = title;

    upsertMetaTag('name', 'description', description);
    upsertMetaTag('name', 'keywords', keywords);
    upsertMetaTag('name', 'author', LAWYER_PROFILE.fullName);
    upsertMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    upsertLinkTag('canonical', currentUrl);

    // Open Graph
    upsertMetaTag('property', 'og:type', 'website');
    upsertMetaTag('property', 'og:locale', 'pt_BR');
    upsertMetaTag('property', 'og:site_name', 'Keythlyn Lima Advocacia');
    upsertMetaTag('property', 'og:url', currentUrl);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:image', resolvedOgImage);
    upsertMetaTag('property', 'og:image:alt', ogImageAlt);
    upsertMetaTag('property', 'og:image:width', String(ASSETS.heroPortrait.width));
    upsertMetaTag('property', 'og:image:height', String(ASSETS.heroPortrait.height));

    // Twitter Cards
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', resolvedOgImage);
    upsertMetaTag('name', 'twitter:image:alt', ogImageAlt);

    // Schema.org Structured Data (LegalService + FAQPage)
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LegalService',
          '@id': `${origin}/#legal-service`,
          name: 'Keythlyn Lima Advocacia',
          url: currentUrl,
          image: resolvedOgImage,
          description,
          areaServed: [
            {
              '@type': 'City',
              name: 'Goiânia',
              containedInPlace: {
                '@type': 'State',
                name: 'Goiás',
              },
            },
            {
              '@type': 'Country',
              name: 'Brasil',
            },
          ],
          serviceType: [
            'Direito de Família',
            'Divórcio e dissolução de união estável',
            'Pensão alimentícia',
            'Guarda dos filhos',
            'Regulamentação de convivência',
            'Investigação e reconhecimento de paternidade',
            'Planejamento familiar e partilha de bens',
          ],
          founder: {
            '@type': 'Person',
            name: LAWYER_PROFILE.fullName,
            jobTitle: LAWYER_PROFILE.role,
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Goiânia',
            addressRegion: 'GO',
            addressCountry: 'BR',
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${origin}/#faq`,
          mainEntity: FAQ_CONTENT.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    };

    let jsonLdScript = document.getElementById('seo-json-ld') as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-json-ld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);
    return () => {
      if (scheduleAnalytics !== undefined && window.cancelIdleCallback && typeof scheduleAnalytics === 'number') {
        window.cancelIdleCallback(scheduleAnalytics);
      } else if (scheduleAnalytics !== undefined) {
        window.clearTimeout(scheduleAnalytics);
      }
    };
  }, [title, description, keywords, ogImage, ogImageAlt, canonicalPath, noIndex]);

  return null;
}
