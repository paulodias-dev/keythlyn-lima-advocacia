import { useState } from 'react';
import { Scale } from 'lucide-react';
import type { ImageAsset } from '../../data/landingContent';

interface OptimizedImageProps {
  asset: ImageAsset;
  className?: string;
  pictureClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  asset,
  className = '',
  pictureClassName = 'block w-full h-full',
  priority = false,
  sizes,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={asset.alt}
        className={`flex flex-col items-center justify-center bg-[#F4F1EC] text-[#524E48] p-6 text-center ${className}`}
      >
        <Scale className="w-8 h-8 text-[#8F6520] mb-3" aria-hidden="true" />
        <span className="font-serif text-lg font-semibold text-[#181715]">Keythlyn Lima</span>
        <span className="text-xs text-[#524E48] mt-1">Advocacia · OAB/GO 67.481</span>
      </div>
    );
  }

  return (
    <picture className={pictureClassName}>
      <source srcSet={asset.webp} type="image/webp" sizes={sizes} />
      <img
        src={asset.jpeg}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </picture>
  );
}
