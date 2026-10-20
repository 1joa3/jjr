// Perguntas frequentes - também gera o FAQPage (JSON-LD) para Google e buscadores de IA
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';

// Fonte única: o mesmo conteúdo aparece na página e nos dados estruturados
export const faqs = [
  {
    q: 'Onde fica a JJR Contabilidade?',
    a: 'Nosso escritório fica na Av. Comendador Renato Ribeiro Coutinho, 1097, 1° andar, Sala 3, em Sapé - PB. Como o atendimento é 100% online, também atendemos empresas de outras cidades, de onde você estiver.',
  },
  {
    q: 'Quais serviços a JJR Contabilidade oferece?',
    a: 'Abertura e formalização de empresas (do CNPJ ao alvará), contabilidade mensal completa (contábil, fiscal e trabalhista), troca de contabilidade, desenquadramento de MEI para Microempresa (ME) e declaração de Imposto de Renda para Pessoa Física e Jurídica.',
  },
  {
    q: 'A JJR Contabilidade é registrada no CRC?',
    a: 'Sim. Somos uma empresa com registro ativo e regularizado, regida e fiscalizada pelo Conselho Regional de Contabilidade (CRC).',
  },
  {
    q: 'Como funciona a troca de contador para a JJR?',
    a: 'Você nos informa que deseja trocar e nós cuidamos de toda a transição junto ao contador anterior, de forma simples e segura, para que sua empresa continue em dia durante a mudança.',
  },
  {
    q: 'Meu MEI cresceu. Vocês fazem a mudança para ME?',
    a: 'Sim. Fazemos o desenquadramento do MEI e a transição para Microempresa, avaliando a melhor tributação para o novo porte do negócio, incluindo o Fator R do Simples Nacional.',
  },
  {
    q: 'O diagnóstico inicial tem custo?',
    a: 'Não. O diagnóstico da situação fiscal e o planejamento tributário inicial são gratuitos, sem compromisso.',
  },
  {
    q: 'Como falo com um contador da JJR?',
    a: 'Pelo WhatsApp (83) 99100-6990, pelo e-mail contato@jjrcontabilidade.com.br ou pelo formulário deste site. Pelo formulário, retornamos em até 24 horas úteis.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-white py-24 lg:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Dúvidas frequentes"
            title="Perguntas que recebemos todos os dias"
            description="Não encontrou sua dúvida? Fale com a gente pelo WhatsApp ou pelo formulário de contato."
          />
        </Reveal>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-lg font-semibold text-navy-900 md:text-xl">{f.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-navy-900 bg-navy-900 text-white'
                          : 'border-slate-300 text-slate-500 group-hover:border-navy-900 group-hover:text-navy-900'
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                {/* A resposta fica sempre no HTML (só é ocultada visualmente) para ser lida por buscadores */}
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
