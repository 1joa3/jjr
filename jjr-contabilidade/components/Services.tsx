// Importações React e ícones
import React, { useEffect, useRef, useState } from 'react';
import { Building2, PieChart, RefreshCcw, TrendingUp, Calculator, ArrowRight } from 'lucide-react';
import styles from '../styles/components/Services.module.css';

// Dados dos serviços oferecidos pela empresa
const serviceData = [
  {
    title: 'Formalização de empresa',
    desc: 'Formalize seu negócio com agilidade. Cuidamos de todo o processo burocrático, desde o CNPJ até o alvará.',
    icon: <Building2 size={32} />,
  },
  {
    title: 'Contabilidade Mensal',
    desc: 'Gestão contábil, fiscal e trabalhista completa para que você foque no que realmente importa: vender mais.',
    icon: <PieChart size={32} />,
  },
  {
    title: 'Trocar Contabilidade',
    desc: 'Migre sua empresa para a JJR de forma simples e segura. Nós cuidamos da transição sem dor de cabeça.',
    icon: <RefreshCcw size={32} />,
  },
  {
    title: 'De MEI para ME',
    desc: 'Seu negócio cresceu? Fazemos o desenquadramento do MEI e a transição para Microempresa com estratégia.',
    icon: <TrendingUp size={32} />,
  },
  {
    title: 'Imposto de Renda (IR)',
    desc: 'Assessoria completa para declaração de Pessoa Física e Jurídica, evitando a malha fina e otimizando impostos.',
    icon: <Calculator size={32} />,
  },
];

const ServiceCard = ({ service }: { key?: number; service: typeof serviceData[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Ativa apenas quando cruzar parte da tela visível no mobile
                if (window.innerWidth <= 768) {
                    setIsActive(entry.isIntersecting);
                }
            },
            {
                threshold: 0.6,
                rootMargin: "-10% 0px -10% 0px"
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div ref={cardRef} className={`${styles.card} ${isActive ? styles.activeCard : ''}`}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                {service.icon}
              </div>
            </div>
            <h4 className={styles.cardTitle}>{service.title}</h4>
            <p className={styles.cardDescription}>
              {service.desc}
            </p>
            <a href="#contato" className={styles.link}>
              Saiba Mais <ArrowRight size={16} />
            </a>
        </div>
    );
};

// Componente de Serviços - exibe os serviços oferecidos pela empresa
export const Services: React.FC = () => {
  return (
    <section id="servicos" className={styles.services}>
      {/* Cabeçalho da seção */}
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Nossos Serviços</h2>
        <h3 className={styles.title}>Soluções completas para cada etapa</h3>
        <p className={styles.description}>
          Oferecemos uma assessoria contábil moderna, digital e eficiente para garantir que sua empresa esteja sempre em dia com as obrigações legais.
        </p>
      </div>

      {/* Grade de cards de serviços */}
      <div className={styles.grid}>
        {/* Loop pelos serviços e renderiza cada card */}
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};
