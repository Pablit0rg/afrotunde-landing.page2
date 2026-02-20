'use client';

import { useEffect, useRef } from 'react';

/**
 * Componente StatsSection
 * Seção de estatísticas com contadores animados
 */
export const StatsSection = () => {
  const statRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const animateCounter = (el: HTMLElement) => {
      const goal = parseInt(el.getAttribute('data-goal') || '0', 10);
      let current = 0;
      const duration = 2000;
      const stepTime = Math.max(10, Math.floor(duration / goal));

      const timer = setInterval(() => {
        current += 1;
        el.innerText = `${current}+`;

        if (current >= goal) {
          clearInterval(timer);
          el.innerText = `${goal}+`;
        }
      }, stepTime);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statRefs.current.forEach((ref) => {
      if (ref) counterObserver.observe(ref);
    });

    return () => {
      statRefs.current.forEach((ref) => {
        if (ref) counterObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="stats" className="section stats-section">
      <div className="container">
        <h2 className="fade-in">Minha Jornada em Números</h2>
        <div className="stats-container fade-in">
          <div className="stat-item">
            <h3 className="stat-number" data-goal="100" ref={(el) => { if (el) statRefs.current[0] = el; }}>
              0+
            </h3>
            <p className="stat-label">Clientes Felizes</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number" data-goal="8" ref={(el) => { if (el) statRefs.current[1] = el; }}>
              0+
            </h3>
            <p className="stat-label">Anos de Experiência</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number" data-goal="500" ref={(el) => { if (el) statRefs.current[2] = el; }}>
              0+
            </h3>
            <p className="stat-label">Artes Criadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};
