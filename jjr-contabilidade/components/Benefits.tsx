// Importações React e ícones
import React from 'react';
import { MessageCircle, TrendingDown, UserCheck, Laptop, Building2, ArrowRight } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';

// Lista de benefícios oferecidos pela empresa
const benefits = [
  {
    title: 'Atendimento por WhatsApp',
    desc: 'Suporte rápido e prático direto no WhatsApp, com a atenção do nosso time de especialistas sempre que você precisar.',
    Icon: MessageCircle,
  },
  {
    title: 'Redução de impostos',
    desc: 'Calculamos a melhor tributação para sua empresa, incluindo o Fator R do Simples Nacional, para você pagar menos de forma legal.',
    Icon: TrendingDown,
  },
  {
    title: 'Assessoria especializada',
    desc: 'Tenha um especialista dedicado para cuidar da sua empresa, orientando nas melhores decisões fiscais e financeiras.',
    Icon: UserCheck,
  },
  {
    title: 'Resolva tudo 100% online',
    desc: 'Atendimento totalmente digital, de onde você estiver. Sem necessidade de visitas presenciais ou papelada.',
    Icon: Laptop,
  },
  {
    title: 'Agilidade em serviços municipais',
    desc: 'Facilitamos o relacionamento com a prefeitura e órgãos municipais, agilizando alvarás, licenças e demais obrigações locais.',
    Icon: Building2,
  },
];

// Componente de Benefícios - destaca vantagens de ser cliente
export const Benefits: React.FC = () => {
  return (
    <section className="border-t border-slate-200 bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Coluna fixa com o título */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Benefícios exclusivos"
              title="Tudo o que sua empresa precisa para crescer"
              description="Tenha especialistas dedicados ao seu negócio, que cuidam diariamente de toda a contabilidade da sua empresa."
            />
            <a
              href="#contato"
              className="group mt-10 inline-flex items-center gap-2 border-b border-navy-900 pb-1 font-semibold text-navy-900 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Lista de benefícios */}
        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {benefits.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={i * 60} className="flex gap-6 py-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600">
                  <b.Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy-900 md:text-2xl">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
