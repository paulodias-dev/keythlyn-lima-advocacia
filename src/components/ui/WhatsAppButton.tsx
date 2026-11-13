import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, type WhatsAppMessageOptions } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

interface WhatsAppButtonProps {
  label: string;
  location: string;
  messageOptions?: WhatsAppMessageOptions;
  variant?: 'primary' | 'dark' | 'light' | 'compact';
  className?: string;
  fullWidth?: boolean;
}

export function WhatsAppButton({
  label,
  location,
  messageOptions,
  variant = 'primary',
  className = '',
  fullWidth = false,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(messageOptions);

  const variantClasses: Record<NonNullable<WhatsAppButtonProps['variant']>, string> = {
    primary:
      'bg-[#135D36] text-white hover:bg-[#0E4729] border border-[#135D36] shadow-sm',
    dark:
      'bg-[#181715] text-[#FAF9F6] hover:bg-[#2C2A26] border border-[#181715]',
    light:
      'bg-[#FAF9F6] text-[#181715] hover:bg-[#EFECE5] border border-[#FAF9F6]',
    compact:
      'bg-[#135D36] text-white hover:bg-[#0E4729] border border-[#135D36]',
  };

  const sizeClasses =
    variant === 'compact'
      ? 'px-4 py-2.5 text-sm min-h-[40px]'
      : 'px-6 py-3.5 text-sm sm:text-base min-h-[48px]';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location, messageOptions?.topic)}
      aria-label={`${label} (abre o WhatsApp em uma nova aba)`}
      className={`inline-flex items-center justify-center gap-2.5 rounded-sm font-semibold tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
        fullWidth ? 'w-full' : ''
      } ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
