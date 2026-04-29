// Importações do React e ícones do Lucide
import React from 'react';
import { ShieldCheck, Zap, UserCheck, Eye, LucideIcon } from 'lucide-react';

// Interface que define a estrutura de cada recurso/benefício
// Garante que todos os objetos de features tenham as propriedades corretas
interface Feature {
  title: string;          // Título do benefício
  desc: string;           // Descrição detalhada
  Icon: LucideIcon;       // Ícone do Lucide React
  colorClass: string;     // Classe CSS para cor do ícone
}

// Array de recursos/benefícios da empresa
// Cada item representa um diferencial da JJR Contabilidade
const features: Feature[] = [
  {
    title: 'Praticidade',
    desc: 'Cuidamos de toda a burocracia contábil para que você ganhe tempo, organização e tranquilidade no dia a dia.',
    Icon: Zap,
    colorClass: 'text-[#0e4ba8]',
  },
  {
    title: 'Especialista Contábil',
    desc: 'Profissionais experientes e preparados para orientar sua empresa nas melhores decisões fiscais e financeiras.',
    Icon: UserCheck,
    colorClass: 'text-[#0e4ba8]',
  },
  {
    title: 'Segurança',
    desc: 'Garantimos conformidade com a legislação, reduzindo riscos, evitando multas e mantendo sua empresa em dia.',
    Icon: ShieldCheck,
    colorClass: 'text-[#0e4ba8]',
  },
  {
    title: 'Transparência',
    desc: 'Informações claras, relatórios objetivos e comunicação direta para você ter total controle sobre sua contabilidade.',
    Icon: Eye,
    colorClass: 'text-[#0e4ba8]',
  },
];

// Estatísticas da empresa para mostrar credibilidade
// Dados que demonstram experiência e alcance da JJR
const stats = [
  { label: 'Anos no mercado', value: '7+' },
  { label: 'Empreendedores atendidos', value: '300+' },
  { label: 'Empresas abertas', value: '100+' },
];

// Componente principal que exibe a seção "Por que escolher a JJR?"
export const WhyChooseUs: React.FC = () => {
  return (
    // Seção principal com fundo navy escuro (#0F1729)
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0F1729' }}>
      {/* Padrão de fundo sutil com círculos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Container principal com padding responsivo */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Layout flexível: coluna em mobile, linha em desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

          {/* Lado esquerdo: Informações e recursos */}
          <div className="lg:w-1/2">
            {/* Subtítulo pequeno com cor azul clara */}
            <h2 className="font-bold uppercase tracking-widest text-sm mb-4" style={{ color: '#60A5FA' }}>Por que JJR?</h2>
            {/* Título principal */}
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Experts no que fazemos</h3>
            {/* Descrição introdutória */}
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Não somos apenas contadores, somos parceiros estratégicos do seu negócio. Unimos tecnologia e conhecimento humano para entregar resultados reais.
            </p>

            {/* Grade de recursos/benefícios - 2 colunas em telas maiores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Loop pelos recursos e renderiza cada card */}
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-lg border border-[#344866]/50 hover:border-[#60A5FA] transition-all duration-300" style={{ backgroundColor: '#2D4A6F' }}>
                  {/* Container do ícone */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#3B82F6' }}>
                    <f.Icon className="text-white" size={24} />
                  </div>
                  {/* Título do recurso */}
                  <h4 className="font-bold text-lg mb-2 text-white">{f.title}</h4>
                  {/* Descrição do recurso */}
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Badges de confiança/credibilidade */}
            <div className="flex justify-between sm:justify-start gap-2 sm:gap-6 items-center pt-6 border-t w-full" style={{ borderColor: '#344866' }}>
              {/* Badge CRC Ativo */}
              <div className="text-center">
                <div className="text-base sm:text-2xl font-bold mb-1" style={{ color: '#60A5FA' }}>CRC Ativo</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wide" style={{ color: '#94A3B8' }}>Regularizado</div>
              </div>
              {/* Divisor vertical */}
              <div className="h-8 sm:h-12 w-px shrink-0" style={{ backgroundColor: '#344866' }}></div>
              {/* Badge de avaliação Google */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-base sm:text-2xl font-bold text-white">4.8</span>
                  <span className="text-sm sm:text-base text-yellow-400">★</span>
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wide" style={{ color: '#94A3B8' }}>Google Reviews</div>
              </div>
              {/* Divisor vertical */}
              <div className="h-8 sm:h-12 w-px shrink-0" style={{ backgroundColor: '#344866' }}></div>
              {/* Badge anos de mercado */}
              <div className="text-center">
                <div className="text-base sm:text-2xl font-bold mb-1 text-white">7+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wide" style={{ color: '#94A3B8' }}>Anos no <br className="sm:hidden" />Mercado</div>
              </div>
            </div>
          </div>

          {/* Lado direito: Card de estatísticas */}
          <div className="lg:w-1/2 w-full">
            {/* Card com azul vibrante (#3B82F6) */}
            <div className="rounded-2xl p-10 md:p-16 relative shadow-2xl overflow-hidden text-white" style={{ backgroundColor: '#3B82F6' }}>
              {/* Elemento decorativo circular */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>

              {/* Conteúdo do card */}
              <div className="relative z-10 space-y-12">
                {/* Loop pelas estatísticas */}
                {stats.map((s, i) => (
                  <div key={i} className="text-center md:text-left">
                    {/* Valor grande da estatística */}
                    <p className="text-5xl md:text-7xl font-serif font-bold mb-2">{s.value}</p>
                    {/* Label da estatística */}
                    <p className="font-medium uppercase tracking-widest text-sm" style={{ color: '#DBEAFE' }}>{s.label}</p>
                  </div>
                ))}

                {/* Botão de call-to-action */}
                <div className="pt-8">
                  <a href="#contato" className="block w-full bg-white py-5 rounded-lg font-semibold text-center text-lg hover:bg-slate-100 transition-colors shadow-lg" style={{ color: '#3B82F6' }}>
                    Entre em contato com nossa equipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto de credibilidade adicional */}
        <div className="text-center max-w-3xl mx-auto pt-12 border-t" style={{ borderColor: '#344866' }}>
          <p className="text-lg italic" style={{ color: '#94A3B8' }}>
            "Empresa regida e fiscalizada pelo Conselho Regional de Contabilidade. Atendimento multicanal via WhatsApp, chat, telefone e e-mail."
          </p>
        </div>
      </div>
    </section>
  );
};
