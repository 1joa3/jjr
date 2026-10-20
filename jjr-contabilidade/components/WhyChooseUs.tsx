// Importações do React e ícones do Lucide
import React from 'react';
import { ShieldCheck, Zap, UserCheck, Eye, ArrowRight, LucideIcon } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';

// Interface que define a estrutura de cada diferencial
interface Feature {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

// Diferenciais da JJR Contabilidade
const features: Feature[] = [
  {
    title: 'Praticidade',
    desc: 'Cuidamos de toda a burocracia contábil para que você ganhe tempo, organização e tranquilidade no dia a dia.',
    Icon: Zap,
  },
  {
    title: 'Especialista contábil',
    desc: 'Profissionais experientes e preparados para orientar sua empresa nas melhores decisões fiscais e financeiras.',
    Icon: UserCheck,
  },
  {
    title: 'Segurança',
    desc: 'Garantimos conformidade com a legislação, reduzindo riscos, evitando multas e mantendo sua empresa em dia.',
    Icon: ShieldCheck,
  },
  {
    title: 'Transparência',
    desc: 'Informações claras, relatórios objetivos e comunicação direta para você ter total controle sobre sua contabilidade.',
    Icon: Eye,
  },
];

// Seção "Por que escolher a JJR?"
export const WhyChooseUs: React.FC = () => {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      {/* Brilho e textura de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              dark
              align="left"
              eyebrow="Por que a JJR"
              title="Especialistas no que fazemos"
              description="Não somos apenas contadores, somos parceiros estratégicos do seu negócio. Unimos tecnologia e conhecimento humano para entregar resultados reais."
            />

            {/* Declaração institucional */}
            <figure className="mt-12 border-l-2 border-brand-400 pl-6">
              <blockquote className="font-serif text-lg italic leading-relaxed text-slate-300">
                Empresa regida e fiscalizada pelo Conselho Regional de Contabilidade. Atendimento multicanal via
                WhatsApp, chat, telefone e e-mail.
              </blockquote>
            </figure>

            <a
              href="#contato"
              className="group mt-12 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-brand-50"
            >
              Entre em contato com nossa equipe
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          {/* Grade de diferenciais */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80} className="h-full">
                <div className="group h-full bg-navy-950/95 p-8 transition-colors duration-300 hover:bg-navy-900 lg:p-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-brand-300 transition-colors group-hover:border-brand-400 group-hover:bg-brand-600 group-hover:text-white">
                    <f.Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-400">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
