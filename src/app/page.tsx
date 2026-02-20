import { SvgIcons } from '@/components/SvgIcons';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { NotificationBar } from '@/components/NotificationBar';
import { Lightbox } from '@/components/Lightbox';
import { WhatsappModal } from '@/components/WhatsappModal';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ScrollToTop } from '@/components/ScrollToTop';

/**
 * Página Principal
 * Componente raiz que empilha todas as seções
 */
export default function Home() {
  return (
    <>
      <SvgIcons />
      <Navbar />
      
      <main>
        <HeroSection />
        <GallerySection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <NotificationBar />
      <Lightbox />
      <WhatsappModal />
      <ScrollReveal />
      <ScrollToTop />
      
      <Footer />
    </>
  );
}
