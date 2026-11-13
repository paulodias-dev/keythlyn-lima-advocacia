const DEFAULT_WHATSAPP_NUMBER = '5562999999999';

export function getWhatsAppNumber(): string {
  const configured = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const cleaned = configured?.replace(/\D/g, '');
  return cleaned && cleaned.length >= 10 ? cleaned : DEFAULT_WHATSAPP_NUMBER;
}

export interface WhatsAppMessageOptions {
  topic?: string;
  clientName?: string;
  mode?: 'Presencial (Goiânia)' | 'Online' | string;
}

export function buildWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const phone = getWhatsAppNumber();
  const lines: string[] = [
    'Olá, Dra. Keythlyn Lima.',
  ];

  if (options.clientName?.trim()) {
    lines.push(`Meu nome é ${options.clientName.trim()}.`);
  }

  if (options.topic?.trim()) {
    lines.push(`Gostaria de solicitar orientação jurídica sobre: ${options.topic.trim()}.`);
  } else {
    lines.push('Gostaria de apresentar minha situação e conhecer as possibilidades de atendimento em Direito de Família.');
  }

  if (options.mode?.trim()) {
    lines.push(`Preferência de atendimento: ${options.mode.trim()}.`);
  }

  const encodedMessage = encodeURIComponent(lines.join(' '));
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
