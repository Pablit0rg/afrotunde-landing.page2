'use client';

import { useEffect, useState } from 'react';

/**
 * Componente ScrollToTop
 * Botão flutuante para voltar ao topo da página
 */
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    let debounceTimer: NodeJS.Timeout;
    const debounce = (callback: () => void, time: number) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(callback, time);
    };

    window.addEventListener('scroll', () => {
      debounce(handleScroll, 100);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        debounce(handleScroll, 100);
      });
      clearTimeout(debounceTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#inicio"
      className={`voltar-ao-topo ${isVisible ? 'is-visible' : ''}`}
      title="Voltar ao topo"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <svg>
        <use href="#icon-arrow-up"></use>
      </svg>
    </a>
  );
};
