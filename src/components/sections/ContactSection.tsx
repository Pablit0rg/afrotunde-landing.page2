'use client';

import { useState } from 'react';

/**
 * Componente ContactSection
 * Seção de contato com PIX e WhatsApp
 */
export const ContactSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyPix = async () => {
    const pixKey = document.getElementById('pix-key')?.innerText || '';
    try {
      await navigator.clipboard.writeText(pixKey);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar PIX:', err);
    }
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <h2 className="fade-in">Vamos cuidar da sua coroa?</h2>

        <p className="texto-localizacao fade-in">
          Atendimento profissional em Curitiba, com fácil acesso para toda a região. Fale comigo e agende seu horário.
        </p>

        <div className="pix-copy-wrapper fade-in">
          <span className="pix-text">Chave PIX (Celular):</span>
          <strong id="pix-key">(41) 99999-9999</strong>
          <button id="copy-pix-btn" title="Copiar Chave PIX" onClick={handleCopyPix}>
            <svg className="icon-copy">
              <use href="#icon-copy"></use>
            </svg>
            <span className={`tooltip-copy ${showTooltip ? 'is-visible' : ''}`}>
              Copiado!
            </span>
          </button>
        </div>

        <div className="botoes-contato fade-in">
          <a href="[SEU_LINK_WHATSAPP_AQUI]" className="cta-button" id="whatsapp-btn">
            <span className="btn-text">Chamar no WhatsApp</span>
            <svg className="spinner">
              <use href="#icon-spinner"></use>
            </svg>
          </a>
          <a href="https://www.instagram.com/afrotunde/" target="_blank" rel="noopener noreferrer" className="cta-button">
            <span className="btn-text">Ver mais no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
