// Importação do React
import React from 'react';

// Importação de todos os componentes do site
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Carregamento preguiçoso (Lazy Loading) para seções abaixo da dobra
const Services = React.lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Benefits = React.lazy(() => import('./components/Benefits').then(module => ({ default: module.Benefits })));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs').then(module => ({ default: module.WhyChooseUs })));
const TeamSection = React.lazy(() => import('./components/TeamSection').then(module => ({ default: module.TeamSection })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const ContactForm = React.lazy(() => import('./components/ContactForm').then(module => ({ default: module.ContactForm })));
const AIAssistant = React.lazy(() => import('./components/AIAssistant').then(module => ({ default: module.AIAssistant })));

// Componente de carregamento simples
const SectionLoader = () => (
  <div className="h-48 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
  </div>
);

// Componente principal da aplicação
// Organiza todas as seções do site em ordem vertical
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Barra de navegação fixa no topo */}
      <Navbar />

      {/* Conteúdo principal do site */}
      <main>
        <Hero />           {/* Seção inicial/banner principal */}
        
        <React.Suspense fallback={<SectionLoader />}>
          <Services />       {/* Seção de serviços oferecidos */}
          <Benefits />       {/* Seção de benefícios/diferenciais */}
          <WhyChooseUs />    {/* Seção "Por que escolher a JJR?" */}
          <TeamSection />    {/* Seção sobre a equipe */}
          <Testimonials />   {/* Seção de depoimentos de clientes */}
          <ContactForm />    {/* Formulário de contato */}
        </React.Suspense>
      </main>

      {/* Rodapé do site */}
      <Footer />

      {/* Assistente de IA interativo (desativado no momento) */}
      {/* Remova os comentários abaixo para ativar o chat de IA */}
      {/*<AIAssistant />*/}
    </div>
  );
};

export default App;
