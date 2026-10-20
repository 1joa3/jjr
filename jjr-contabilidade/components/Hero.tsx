// Importações React e ícones
import React from 'react';
import { ArrowRight, Check, ShieldCheck, Star } from 'lucide-react';

// Importando a imagem do Hero
import homeImg from '../images/homeimg.webp';

const highlights = [
  'Sua empresa regularizada e sem multas indesejadas',
  'Economia no pagamento de impostos de forma legal',
  'Suporte com contadores especialistas via WhatsApp',
];

// Números exibidos na faixa de credibilidade abaixo do Hero
const stats = [
  { value: '7+', label: 'Anos de experiência' },
  { value: '300+', label: 'Empreendedores atendidos' },
  { value: '100+', label: 'Empresas abertas' },
  { value: '4.8', label: 'Avaliação no Google', star: true },
];

// Componente Hero - seção principal/banner do site
export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 lg:pt-36">
      {/* Grade sutil de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e5eaf1 1px, transparent 1px), linear-gradient(to bottom, #e5eaf1 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Conteúdo textual */}
        <div>
          <div className="animate-fade-in-up mb-7 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <ShieldCheck size={16} />
            Contabilidade em Sapé - PB · CRC ativo
          </div>

          <h1 className="animate-fade-in-up font-serif text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.6rem]">
            Você cuida da sua empresa.{' '}
            <span className="italic text-brand-600">Nós cuidamos</span> da sua contabilidade.
          </h1>

          <p className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Deixe a burocracia com a gente. Resolvemos tudo, desde a abertura do CNPJ até o dia a dia da sua
            contabilidade, para você focar no que realmente importa:{' '}
            <strong className="font-semibold text-navy-900">fazer sua empresa crescer</strong>.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-700/30"
            >
              Começar agora
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-navy-900 transition-colors hover:border-navy-900"
            >
              Conhecer serviços
            </a>
          </div>
        </div>

        {/* Imagem com selos de credibilidade */}
        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden h-full w-full rounded-[28px] border border-brand-200 lg:block" aria-hidden />
          <div className="relative overflow-hidden rounded-[28px] shadow-2xl shadow-navy-900/15">
            <img
              src={homeImg}
              alt="Cartão de visita da JJR Contabilidade no escritório"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/5.2]"
              width={1920}
              height={1280}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />
          </div>

          {/* Selo CRC */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 pr-6 shadow-xl sm:left-[-1.5rem]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">Registro ativo no CRC</p>
              <p className="text-xs text-slate-500">Conselho Regional de Contabilidade</p>
            </div>
          </div>

          {/* Selo Google */}
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-navy-900">4.8</span>
            <span className="text-xs text-slate-500">no Google</span>
          </div>
        </div>
      </div>

      {/* Faixa de números */}
      <div className="relative mx-auto mt-24 max-w-7xl px-4 md:px-8">
        <dl className="grid grid-cols-2 border-y border-slate-200 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-8 text-center lg:py-10 ${i % 2 === 1 ? 'border-l border-slate-200' : ''} ${
                i >= 2 ? 'border-t border-slate-200 lg:border-t-0' : ''
              } ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="flex items-center justify-center gap-1.5 font-serif text-4xl font-semibold text-navy-900 md:text-5xl">
                {s.value}
                {s.star && <Star size={22} className="fill-amber-400 text-amber-400" />}
              </dd>
              <dd className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
