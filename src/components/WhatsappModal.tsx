'use client';

import { useEffect, useState } from 'react';

/**
 * Componente WhatsappModal
 * Modal de confirmação para redirecionamento ao WhatsApp
 */
export const WhatsappModal = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleWhatsappClick = (e: Event) => {
      e.preventDefault();
      setIsActive(true);
      document.body.classList.add('no-scroll');
    };

    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappBtnHero = document.getElementById('whatsapp-btn-hero');

    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', handleWhatsappClick);
    }
    if (whatsappBtnHero) {
      whatsappBtnHero.addEventListener('click', handleWhatsappClick);
    }

    return () => {
      if (whatsappBtn) {
        whatsappBtn.removeEventListener('click', handleWhatsappClick);
      }
      if (whatsappBtnHero) {
        whatsappBtnHero.removeEventListener('click', handleWhatsappClick);
      }
    };
  }, []);

  const closeModal = () => {
    setIsActive(false);
    document.body.classList.remove('no-scroll');
  };

  const handleConfirm = () => {
    const whatsappBtnHero = document.getElementById('whatsapp-btn-hero') as HTMLAnchorElement;
    if (whatsappBtnHero) {
      const whatsappLink = whatsappBtnHero.getAttribute('href');
      if (whatsappLink) {
        window.open(whatsappLink, '_blank');
      }
    }
    closeModal();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={`modal-overlay ${isActive ? 'active' : ''}`} id="whatsapp-modal" onClick={handleOverlayClick}>
      <div className="modal-content fade-in">
        <button className="modal-close" id="modal-close-btn" title="Fechar" onClick={closeModal}>
          <svg>
            <use href="#icon-close"></use>
          </svg>
        </button>
        <h3>Redirecionando...</h3>
        <p>Você está sendo redirecionado para o WhatsApp para finalizar seu agendamento.</p>
        <div className="modal-botoes">
          <button className="cta-button" id="modal-confirm-btn" onClick={handleConfirm}>
            Continuar
          </button>
          <button className="cta-button secondary" id="modal-cancel-btn" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
