/**
 * Componente Footer
 * Rodapé com informações de copyright e links sociais
 */
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 afrotunde | Todos os direitos reservados.</p>
        <p className="desenvolvido-por">
          Desenvolvido por:{' '}
          <a href="https://www.instagram.com/pablit0rg/" target="_blank" rel="noopener noreferrer">
            <svg className="icon-instagram">
              <use href="#icon-instagram"></use>
            </svg>
            @pablit0rg
          </a>
        </p>
      </div>
    </footer>
  );
};
