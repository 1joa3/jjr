// Importação React
import React, { useState } from 'react';
import joaoPerfil from '../images/joao_perfil.webp';
import jorgePerfil from '../images/Jorge_perfil.webp';
import rodrigoPerfil from '../images/rodrigo_perfil.webp';
import socios from '../images/socios.webp';

// Componente TeamSection - Seção sobre a equipe e atendimento humanizado
export const TeamSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "João Antonio da Costa Neto",
      role: "Sócio-Fundador & Especialista em Gestão Tributária",
      image: joaoPerfil,
      description: "Doutorando e Mestre em Ciências Contábeis pela Universidade Federal da Paraíba (UFPB), é especialista em auditoria fiscal e gestão tributária. Integra rigor acadêmico à experiência prática na fiscal, oferecendo uma visão analítica para a resolução de questões complexas. Também atua na legalização de empresas (abertura, alteração, baixa, etc.)."
    },
    {
      id: 2,
      name: "Jorge Antonio Marinho Neto",
      role: "Sócio-Fundador & Especialista em Planejamento Tributário",
      image: jorgePerfil,
      description: "Bacharel em Ciências Contábeis pela Universidade Presbiteriana Mackenzie, é especialista na área de planejamento tributário para o setor privado e nos informes de Demonstrativos Fiscais para o governo. Atua na transformação de dados contábeis em indicadores de performance, garantindo que as empresas tomem decisões baseadas em segurança jurídica e rentabilidade."
    },
    {
      id: 3,
      name: "Rodrigo Lima de Amorim",
      role: "Sócio-Fundador & Especialista em RH e Departamento Pessoal",
      image: rodrigoPerfil,
      description: "Bacharel em Ciências Contábeis pela Universidade Presbiteriana Mackenzie, é especialista em Departamento Pessoal e Gestão de Pessoas, com foco em conformidade trabalhista, eSocial e auditoria de folha de pagamento. Possui vasta experiência na mitigação de riscos laborais e na estruturação de processos que otimizam a relação entre empresa e colaborador."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Layout flexível: imagem + conteúdo */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Lado esquerdo: Imagem da equipe com elementos decorativos */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* Círculo decorativo animado no topo esquerdo */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
              {/* Círculo decorativo no fundo direito */}
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-slate-100 rounded-full -z-10"></div>
              {/* Imagem principal da equipe */}
              <img
                src={socios}
                alt="Nossa equipe"
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
              />
            </div>
          </div>

          {/* Lado direito: Conteúdo textual */}
          <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
            {/* Subtítulo pequeno */}
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Conexão com o Cliente</h2>
            {/* Título principal com destaque em "humano" */}
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Sua empresa merece um atendimento <span className="italic underline decoration-blue-500">humano</span> e dedicado.
            </h3>
            {/* Parágrafos descritivos */}
            <p className="text-slate-600 text-lg leading-relaxed">
              Na JJR Contabilidade, não tratamos nossos clientes como apenas números em uma planilha. Acreditamos que o sucesso do seu negócio depende de uma relação de confiança próxima e transparente.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nossa equipe está sempre disponível para tirar suas dúvidas, realizar planejamentos tributários personalizados e garantir que você tenha clareza total sobre a saúde financeira da sua organização.
            </p>

            {/* Cards de perfil com clique para expandir */}
            <div className="space-y-4 mt-6">
              {teamMembers.map((member) => {
                const isExpanded = expandedId === member.id;
                return (
                  <div
                    key={member.id}
                    onClick={() => setExpandedId(isExpanded ? null : member.id)}
                    className={`group cursor-pointer rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-500 ease-out ${isExpanded ? 'p-8 flex flex-col items-center text-center ring-2 ring-blue-500 shadow-xl scale-[1.02] bg-gradient-to-b from-white to-blue-50/30' : 'p-5 flex items-center gap-5 hover:shadow-md hover:-translate-y-1'}`}
                  >
                    <div className={`overflow-hidden shadow-md shrink-0 transition-all duration-500 ease-out group-hover:ring-4 group-hover:ring-blue-100 ${isExpanded ? 'w-40 h-40 rounded-full mb-6 ring-4 ring-blue-200' : 'w-16 h-16 rounded-full ring-2 ring-slate-50'}`}>
                      <img src={member.image} alt={member.name} className={`w-full h-full object-cover object-top transition-all duration-700 ease-out ${isExpanded ? 'scale-110 rotate-1' : 'group-hover:scale-110'}`} />
                    </div>
                    <div className={`${isExpanded ? 'w-full' : ''}`}>
                      <p className={`font-bold text-slate-900 transition-all duration-500 ease-out ${isExpanded ? 'text-2xl mb-1' : 'text-lg'}`}>{member.name}</p>
                      <p className={`text-blue-600 font-medium transition-all duration-500 ease-out ${isExpanded ? 'text-base' : 'text-sm'}`}>{member.role}</p>

                      <div className={`transition-all duration-700 ease-out overflow-hidden transform ${isExpanded ? 'max-h-[500px] opacity-100 mt-6 translate-y-0' : 'max-h-0 opacity-0 -translate-y-8'}`}>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
