// Importações React e ícones
import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

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
    role: 'Clinica Odontológica',
    text: 'A JJR é uma empresa super confiável, responsável e muito atenciosa com clientes. Recomendo fortemente! Não tenho nem palavras para dizer o quanto a equipe e o João são competentes. Estão sempre de parabéns!',
    image: imgR,
    link: 'https://www.instagram.com/odontoraphaelg?igsh=ODF6OHdsZXM1bnZ0',
  },
  {
    name: 'CR soluções',
    role: 'Eletrica e consultoria',
    text: 'A JJR cuida de tudo com muita responsabilidade e transparência. Recebo orientações claras, prazos são cumpridos e dúvidas esclarecidas com agilidade, me dando total segurança para focar em crescer minha empresa.',
    image: imgC,
    link: 'https://www.instagram.com/crsolucoesbr?igsh=MWRxaGJyMnZoMDY2bQ==',
  }//,
  // {
  //   name: 'Carlos Mendes',
  //   role: 'Dono da Oficina 2.0',
  //   text: 'Eles me ajudaram a sair do MEI para ME sem que eu sentisse o peso da burocracia. Profissionais nota 10!',
  //   image: 'https://picsum.photos/seed/carlos/100',
  // }
];

// Componente de Depoimentos - mostra feedback de clientes
export const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;

      // Lógica para voltar ao início se chegar no final
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

      if (direction === 'right' && isAtEnd) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Efeito de auto-play
  useEffect(() => {
    if (isHovered) return; // Pausa se o mouse estiver em cima

    const intervalId = setInterval(() => {
      scroll('right');
    }, 4000); // Roda a cada 4 segundos

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section
      className="py-24 bg-slate-50 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Cabeçalho centralizado da seção */}
        <div className="text-center mb-16">
          <h2 className="text-[#0e4ba8] font-bold uppercase tracking-widest text-sm mb-4">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que nossos parceiros dizem</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram na JJR Contabilidade
          </p>
        </div>

        {/* Carrossel de cards de depoimentos */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Loop pelos depoimentos */}
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => t.link && window.open(t.link, '_blank', 'noopener,noreferrer')}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all relative group shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center ${t.link ? 'cursor-pointer hover:-translate-y-1' : ''}`}
            >
              {/* Ícone decorativo de aspas */}
              <Quote className="absolute top-6 right-8 text-slate-100 group-hover:text-blue-50 transition-colors" size={48} />

              {/* Badge de cliente verificado */}
              <div className="inline-flex items-center gap-1 mb-4 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                <CheckCircle2 size={14} />
                <span>Cliente Verificado</span>
              </div>

              {/* Avaliação com 5 estrelas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-amber-500" />)}
              </div>

              {/* Texto do depoimento */}
              <p className="text-slate-700 mb-8 relative z-10 leading-relaxed">"{t.text}"</p>

              {/* Informações do cliente */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                {/* Foto do cliente */}
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-blue-100 shadow-sm" />
                {/* Nome e cargo */}
                <div>
                  <p className="font-bold text-slate-900 text-lg">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
