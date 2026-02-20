/**
 * Componente GallerySection
 * Seção de galeria com cards de serviços
 */
export const GallerySection = () => {
  const services = [
    { price: 'R$ 200,00' },
    { price: 'R$ 150,00' },
    { price: 'R$ 100,00' },
    { price: 'R$ 120,00' },
    { price: 'R$ 250,00' },
    { price: 'R$ 200,00' },
    { price: 'R$ 100,00' },
    { price: 'R$ 80,00' },
  ];

  return (
    <section id="catalogo" className="section">
      <div className="container">
        <h2 className="fade-in">Minhas Artes: Locs, Tranças e Penteados</h2>

        <div className="galeria-grid fade-in">
          {services.map((service, index) => (
            <div key={index} className="card-servico" data-full-src="placeholder-video">
              <div className="video-placeholder">
                <svg>
                  <use href="#icon-video"></use>
                </svg>
              </div>
              <h4>A partir de {service.price}</h4>
              <p className="disclaimer">
                Valor médio. O preço final é negociado via WhatsApp e depende do seu cabelo.
              </p>
            </div>
          ))}
        </div>

        <p className="frase-orgulho fade-in">
          &quot;Cultive sua raiz, floresça sua identidade.&quot;
        </p>
      </div>
    </section>
  );
};
