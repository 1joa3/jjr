// Importações React e ícones
import React from 'react';
import { Building2, PieChart, RefreshCcw, TrendingUp, Calculator, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeading, WHATSAPP_URL } from './ui';

// Dados dos serviços oferecidos pela empresa
const serviceData = [
  {
    title: 'Formalização de empresa',
    desc: 'Formalize seu negócio com agilidade. Cuidamos de todo o processo burocrático, desde o CNPJ até o alvará.',
    Icon: Building2,
  },
  {
    title: 'Contabilidade mensal',
    desc: 'Gestão contábil, fiscal e trabalhista completa para que você foque no que realmente importa: vender mais.',
    Icon: PieChart,
  },
  {
    title: 'Trocar de contabilidade',
    desc: 'Migre sua empresa para a JJR de forma simples e segura. Nós cuidamos da transição sem dor de cabeça.',
    Icon: RefreshCcw,
  },
  {
    title: 'De MEI para ME',
    desc: 'Seu negócio cresceu? Fazemos o desenquadramento do MEI e a transição para Microempresa com estratégia.',
    Icon: TrendingUp,
  },
  {
    title: 'Imposto de Renda (IR)',
    desc: 'Assessoria completa para declaração de Pessoa Física e Jurídica, evitando a malha fina e otimizando impostos.',
    Icon: Calculator,
  },
];

// Componente de Serviços - exibe os serviços oferecidos pela empresa
export const Services: React.FC = () => {
  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Nossos serviços"
            title="Soluções completas para cada etapa do seu negócio"
            description="Uma assessoria contábil moderna, digital e eficiente para garantir que sua empresa esteja sempre em dia com as obrigações legais."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <a
                href="#contato"
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_40px_-20px_rgba(11,27,56,0.25)]"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <service.Icon size={26} strokeWidth={1.75} />
                  </div>
                  <span className="font-serif text-sm text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{service.desc}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Saiba mais
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}

          {/* Card de chamada para atendimento personalizado */}
          <Reveal delay={serviceData.length * 70}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-navy-900 p-8 text-white"
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10"
              />
              <div aria-hidden className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-white/10" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Atendimento sob medida</p>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug">
                  Não encontrou o que precisa? Fale direto com um contador.
                </h3>
              </div>
              <span className="relative mt-10 inline-flex items-center gap-2 font-semibold">
                Conversar no WhatsApp
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
