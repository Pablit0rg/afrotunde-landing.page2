'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Componente Lightbox
 * Modal para exibir imagens e vídeos em tamanho ampliado
 */
export const Lightbox = () => {
  const [isActive, setIsActive] = useState(false);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [imageSrc, setImageSrc] = useState('');
  const videoPlaceholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCardClick = (e: Event) => {
      const card = e.target as HTMLElement;
      const fullSrc = card.getAttribute('data-full-src');

      if (fullSrc === 'placeholder-video') {
        setMediaType('video');
        setImageSrc('');
      } else if (fullSrc && (fullSrc.includes('youtube.com') || fullSrc.includes('youtu.be'))) {
        setMediaType('video');
        setImageSrc(fullSrc);
      } else if (fullSrc) {
        setMediaType('image');
        setImageSrc(fullSrc);
      }

      setIsActive(true);
      document.body.classList.add('no-scroll');
    };

    const cards = document.querySelectorAll('.card-servico');
    cards.forEach((card) => {
      card.addEventListener('click', handleCardClick);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, []);

  const closeLightbox = () => {
    setIsActive(false);
    document.body.classList.remove('no-scroll');
    if (videoPlaceholderRef.current) {
      videoPlaceholderRef.current.innerHTML = '';
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <div className={`lightbox-overlay ${isActive ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="lightbox-content">
        {mediaType === 'image' && (
          <img src={imageSrc} alt="Imagem Ampliada" className="lightbox-image" />
        )}
        <div className="lightbox-video-placeholder" ref={videoPlaceholderRef}>
          <svg className="icon-video-lightbox">
            <use href="#icon-video"></use>
          </svg>
        </div>
        <button className="lightbox-close" title="Fechar" onClick={closeLightbox}>
          <svg>
            <use href="#icon-close"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
