/**
 * Componente TestimonialsSection
 * Seção de depoimentos de clientes
 */
export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: 'Simplesmente incrível! A Karla tem mãos de fada e uma energia que renova a gente. Minha autoestima é outra!',
      author: '- Cliente Satisfeita (via WhatsApp)',
    },
    {
      text: 'Profissional excelente, super atenciosa e o trabalho ficou perfeito. Recomendo de olhos felchados.',
      author: '- Cliente Satisfeita (via Instagram)',
    },
  ];

  return (
    <section id="depoimentos" className="section destaque">
      <div className="container">
        <h2 className="fade-in">Vozes de quem cuidou do Ori</h2>

        <div className="depoimentos-grid fade-in">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-depoimento">
              <p>&quot;{testimonial.text}&quot;</p>
              <span>{testimonial.author}</span>
            </div>
          ))}
        </div>

        <p className="frase-orgulho fade-in">
          &quot;Beleza e espiritualidade trançadas no mesmo fio.&quot;
        </p>
      </div>
    </section>
  );
};
