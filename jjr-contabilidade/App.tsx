// Importação do React
import React from 'react';

// Importação de todos os componentes do site
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TeamSection } from './components/TeamSection';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { WhatsAppButton } from './components/WhatsAppButton';

// Componente principal da aplicação
// Organiza todas as seções do site em ordem vertical
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Barra de navegação fixa no topo */}
      <Navbar />

      {/* Conteúdo principal do site */}
      <main>
        <Hero />           {/* Seção inicial/banner principal */}
        <Services />       {/* Seção de serviços oferecidos */}
        <Benefits />       {/* Seção de benefícios/diferenciais */}
        <WhyChooseUs />    {/* Seção "Por que escolher a JJR?" */}
        <TeamSection />    {/* Seção sobre a equipe */}
        <Testimonials />   {/* Seção de depoimentos de clientes */}
        <FAQ />            {/* Perguntas frequentes (também gera FAQPage JSON-LD) */}
        <ContactForm />    {/* Formulário de contato */}
      </main>

      {/* Rodapé do site */}
      <Footer />

      {/* Botão flutuante de WhatsApp */}
      <WhatsAppButton />

      {/* Assistente de IA interativo (desativado no momento) */}
      {/* Remova os comentários abaixo para ativar o chat de IA */}
      {/*<AIAssistant />*/}
    </div>
  );
};

export default App;
