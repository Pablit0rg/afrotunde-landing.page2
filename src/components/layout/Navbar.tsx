'use client';

import { useEffect, useState } from 'react';

/**
 * Componente Navbar
 * Barra de navegação fixa com menu responsivo e alternador de tema
 */
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Inicializa o tema ao montar o componente
  useEffect(() => {
    const applyTheme = (themeValue: 'light' | 'dark') => {
      if (themeValue === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    };

    const savedTheme = localStorage.getItem('theme-preference') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }

    document.documentElement.lang = 'pt-BR';
  }, []);

  // Alterna o tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme-preference', newTheme);
  };

  // Fecha o menu ao clicar em um link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Controla o scroll quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="container">
        <a href="#inicio" className="logo">
          afrotunde
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={handleNavLinkClick}>
            Início
          </a>
          <a href="#catalogo" onClick={handleNavLinkClick}>
            Galeria
          </a>
          <a href="#stats" onClick={handleNavLinkClick}>
            Jornada
          </a>
          <a href="#depoimentos" onClick={handleNavLinkClick}>
            Depoimentos
          </a>
          <a href="#contato" onClick={handleNavLinkClick}>
            Contato
          </a>

          <button id="theme-toggle" title="Mudar tema" onClick={toggleTheme}>
            <svg className="icon-moon">
              <use href="#icon-moon"></use>
            </svg>
            <svg className="icon-sun">
              <use href="#icon-sun"></use>
            </svg>
          </button>
        </nav>

        <div
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};
