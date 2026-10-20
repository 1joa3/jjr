// Importações React e ícones
import React from 'react';
import { Star, BadgeCheck, ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';

// Importando as imagens locais
import logoPPS from '../images/logo PPS.webp';
import imgR from '../images/R.webp';
import imgC from '../images/logo CR .webp';

// Dados dos depoimentos de clientes
const testimonials = [
  {
    name: 'Paula Peças e Serviços',
    role: 'Serviços automotivos',
    text: 'Tive uma experiência maravilhosa, pois a JJR me passou total segurança em saber que tenho realmente uma contabilidade presente e disponível nas situações que surgem no dia a dia da empresa. Recomendo demais!',
    image: logoPPS,
    link: 'https://www.instagram.com/oficinapaula?igsh=MWlvYjZxYzh1d25hOA==',
  },
  {
    name: 'Dr. Raphael Galvão',
    role: 'Clínica odontológica',
    text: 'A JJR é uma empresa super confiável, responsável e muito atenciosa com clientes. Recomendo fortemente! Não tenho nem palavras para dizer o quanto a equipe e o João são competentes. Estão sempre de parabéns!',
    image: imgR,
    link: 'https://www.instagram.com/odontoraphaelg?igsh=ODF6OHdsZXM1bnZ0',
  },
  {
    name: 'CR Soluções',
    role: 'Elétrica e consultoria',
    text: 'A JJR cuida de tudo com muita responsabilidade e transparência. Recebo orientações claras, prazos são cumpridos e dúvidas esclarecidas com agilidade, me dando total segurança para focar em crescer minha empresa.',
    image: imgC,
    link: 'https://www.instagram.com/crsolucoesbr?igsh=MWRxaGJyMnZoMDY2bQ==',
  },
];

// Componente de Depoimentos - mostra feedback de clientes
export const Testimonials: React.FC = () => {
  return (
    <section className="border-t border-slate-200 bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que nossos parceiros dizem"
            description="Resultados reais de empresas que confiaram na JJR Contabilidade."
          />
        </Reveal>

        {/* Carrossel no mobile, grade no desktop */}
        <div
          className="-mx-4 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="w-[85%] shrink-0 snap-center md:w-auto">
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(11,27,56,0.04)]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    <BadgeCheck size={15} />
                    Cliente verificado
                  </span>
                </div>

                <span aria-hidden className="mt-6 font-serif text-6xl leading-none text-brand-200">
                  “
                </span>
                <blockquote className="-mt-4 flex-1 leading-relaxed text-slate-700">{t.text}</blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full border border-slate-200 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-navy-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver perfil de ${t.name} no Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-navy-900 hover:text-navy-900"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
