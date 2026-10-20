// Importação React
import React, { useState } from 'react';
import { Plus, GraduationCap } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';
import joaoPerfil from '../images/joao_perfil.webp';
import jorgePerfil from '../images/Jorge_perfil.webp';
import rodrigoPerfil from '../images/rodrigo_perfil.webp';
import socios from '../images/socios.webp';

const teamMembers = [
  {
    id: 1,
    name: 'João Antonio da Costa Neto',
    role: 'Sócio-fundador · Gestão Tributária',
    image: joaoPerfil,
    description:
      'Doutorando e Mestre em Ciências Contábeis pela Universidade Federal da Paraíba (UFPB), é especialista em auditoria fiscal e gestão tributária. Integra rigor acadêmico à experiência prática na fiscal, oferecendo uma visão analítica para a resolução de questões complexas. Também atua na legalização de empresas (abertura, alteração, baixa, etc.).',
  },
  {
    id: 2,
    name: 'Jorge Antonio Marinho Neto',
    role: 'Sócio-fundador · Planejamento Tributário',
    image: jorgePerfil,
    description:
      'Bacharel em Ciências Contábeis pela Universidade Presbiteriana Mackenzie, é especialista na área de planejamento tributário para o setor privado e nos informes de Demonstrativos Fiscais para o governo. Atua na transformação de dados contábeis em indicadores de performance, garantindo que as empresas tomem decisões baseadas em segurança jurídica e rentabilidade.',
  },
  {
    id: 3,
    name: 'Rodrigo Lima de Amorim',
    role: 'Sócio-fundador · RH e Departamento Pessoal',
    image: rodrigoPerfil,
    description:
      'Bacharel em Ciências Contábeis pela Universidade Presbiteriana Mackenzie, é especialista em Departamento Pessoal e Gestão de Pessoas, com foco em conformidade trabalhista, eSocial e auditoria de folha de pagamento. Possui vasta experiência na mitigação de riscos laborais e na estruturação de processos que otimizam a relação entre empresa e colaborador.',
  },
];

// Componente TeamSection - Seção sobre a equipe e atendimento humanizado
export const TeamSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="como-funciona" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Imagem dos sócios */}
          <Reveal className="order-2 lg:order-1 lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[28px] bg-brand-50" aria-hidden />
              <img
                src={socios}
                alt="Sócios da JJR Contabilidade"
                width={1920}
                height={1324}
                loading="lazy"
                className="relative aspect-[4/3.4] w-full rounded-[28px] object-cover shadow-xl"
              />
              <div className="absolute bottom-6 right-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
                <p className="font-serif text-3xl font-semibold text-navy-900">3</p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Sócios especialistas</p>
              </div>
            </div>
          </Reveal>

          {/* Conteúdo textual */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Conexão com o cliente"
                title={
                  <>
                    Sua empresa merece um atendimento <span className="italic text-brand-600">humano</span> e dedicado.
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Na JJR Contabilidade, não tratamos nossos clientes como apenas números em uma planilha. Acreditamos
                  que o sucesso do seu negócio depende de uma relação de confiança próxima e transparente.
                </p>
                <p>
                  Nossa equipe está sempre disponível para tirar suas dúvidas, realizar planejamentos tributários
                  personalizados e garantir que você tenha clareza total sobre a saúde financeira da sua organização.
                </p>
              </div>
            </Reveal>

            {/* Perfis dos sócios (acordeão) */}
            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {teamMembers.map((member, i) => {
                const isExpanded = expandedId === member.id;
                return (
                  <Reveal key={member.id} delay={i * 80}>
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : member.id)}
                      aria-expanded={isExpanded}
                      className="group flex w-full items-center gap-5 py-5 text-left"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className={`h-16 w-16 shrink-0 rounded-full object-cover object-top ring-2 transition-all duration-300 ${
                          isExpanded ? 'ring-brand-600' : 'ring-slate-100 group-hover:ring-brand-200'
                        }`}
                      />
                      <div className="flex-1">
                        <p className="font-serif text-lg font-semibold text-navy-900">{member.name}</p>
                        <p className="text-sm font-medium text-brand-600">{member.role}</p>
                      </div>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isExpanded
                            ? 'rotate-45 border-navy-900 bg-navy-900 text-white'
                            : 'border-slate-300 text-slate-500 group-hover:border-navy-900 group-hover:text-navy-900'
                        }`}
                      >
                        <Plus size={18} />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mb-6 flex gap-3 rounded-xl bg-paper p-5 sm:ml-21">
                          <GraduationCap size={20} className="mt-0.5 shrink-0 text-brand-600" />
                          <p className="text-[0.95rem] leading-relaxed text-slate-600">{member.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
