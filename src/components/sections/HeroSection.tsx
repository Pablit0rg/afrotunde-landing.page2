/**
 * Componente HeroSection
 * Seção principal com título, subtítulo e CTA
 */
export const HeroSection = () => {
  return (
    <section id="inicio" className="hero section">
      <div className="container">
        <h1>Tranças Nagô e Locs em Curitiba</h1>
        <p className="subtitulo">
          Por Karla, Trancista e Loctician. A arte ancestral que revela o seu Ori.
        </p>

        <a href="[SEU_LINK_WHATSAPP_AQUI]" className="cta-button" id="whatsapp-btn-hero">
          <span className="btn-text">Agendar Minha Arte no Ori</span>
          <svg className="spinner">
            <use href="#icon-spinner"></use>
          </svg>
        </a>
        <p className="frase-orgulho">&quot;Seu Ori é sua coroa ancestral.&quot;</p>
      </div>
    </section>
  );
};
