// Componentes visuais compartilhados entre as seções
import React, { useEffect, useRef, useState } from 'react';

export const WHATSAPP_URL = 'https://wa.me/5583991006990';

// Logo da marca: as três letras em blocos, como no cartão de visita
export const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <span className="flex flex-col items-center gap-1 leading-none" aria-label="JJR Contabilidade">
    <span className="flex gap-[3px]">
      {['J', 'J', 'R'].map((letter, i) => (
        <span
          key={i}
          className={`flex h-8 w-7 items-center justify-center font-brand text-lg font-medium ${
            light ? 'bg-white text-navy-900' : 'bg-gradient-to-b from-brand-600 to-navy-900 text-white'
          }`}
        >
          {letter}
        </span>
      ))}
    </span>
    <span className={`font-brand text-[0.56rem] font-medium tracking-[0.26em] ${light ? 'text-slate-300' : 'text-navy-900'}`}>
      CONTABILIDADE
    </span>
  </span>
);

// Revela o conteúdo suavemente quando ele entra na tela
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Cabeçalho padrão das seções: rótulo, título e descrição
export const SectionHeading: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
}> = ({ eyebrow, title, description, align = 'center', dark = false }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
    <p
      className={`mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? 'text-brand-300' : 'text-brand-600'
      }`}
    >
      <span className={`h-px w-8 ${dark ? 'bg-brand-300' : 'bg-brand-600'}`} />
      {eyebrow}
    </p>
    <h2
      className={`font-serif text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.75rem] ${
        dark ? 'text-white' : 'text-navy-900'
      }`}
    >
      {title}
    </h2>
    {description && (
      <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    )}
  </div>
);
