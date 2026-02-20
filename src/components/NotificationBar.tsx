'use client';

import { useEffect, useState } from 'react';

/**
 * Componente NotificationBar
 * Barra de notificação com opção de fechar
 */
export const NotificationBar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem('notificationClosed') === 'true') {
        setIsHidden(true);
      }
    } catch (e) {
      console.warn('localStorage não está disponível.');
    }
  }, []);

  const handleClose = () => {
    setIsHidden(true);
    try {
      localStorage.setItem('notificationClosed', 'true');
    } catch (e) {
      console.warn('localStorage não está disponível.');
    }
  };

  return (
    <div className={`notification-bar fade-in ${isHidden ? 'is-hidden' : ''}`} id="notification-bar">
      <p>A agenda para Dezembro está aberta! Garanta seu horário.</p>
      <button className="close-notification" id="close-notification-btn" title="Fechar" onClick={handleClose}>
        <svg className="icon-close">
          <use href="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
};
