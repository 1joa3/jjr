// Importações React e ícones
import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, TrendingDown, UserCheck, Laptop, Building2 } from 'lucide-react';
import styles from '../styles/components/Benefits.module.css';

// Lista de benefícios oferecidos pela empresa
const benefits = [
    {
        title: 'Atendimento por WhatsApp',
        desc: 'Suporte rápido e prático direto no WhatsApp, com a atenção do nosso time de especialistas sempre que você precisar.',
        Icon: MessageCircle,
    },
    {
        title: 'Redução de impostos',
        desc: 'Calculamos automaticamente a melhor tributação para sua empresa, incluindo Fator R do Simples Nacional, pagando menos de forma legal.',
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
        title: 'Agilidade em Serviços Municipais',
        desc: 'Facilitamos o relacionamento com a prefeitura e órgãos municipais, agilizando alvarás, licenças e demais obrigações locais da sua empresa.',
        Icon: Building2,
    },
];

const BenefitCard = ({ benefit }: { key?: number; benefit: typeof benefits[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Ativa apenas quando cruzar 50% da tela visível no mobile
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
                <benefit.Icon className={styles.icon} size={32} />
            </div>
            <h4 className={styles.cardTitle}>{benefit.title}</h4>
            <p className={styles.cardDescription}>{benefit.desc}</p>
        </div>
    );
};

// Componente de Benefícios - destaca vantagens de ser cliente
export const Benefits: React.FC = () => {
    return (
        <section className={styles.benefits}>
            <div className={styles.container}>
                {/* Cabeçalho da seção */}
                <div className={styles.header}>
                    <h2 className={styles.subtitle}>Benefícios Exclusivos</h2>
                    <h3 className={styles.title}>
                        Tudo o que sua empresa precisa para crescer!
                    </h3>
                    <p className={styles.description}>
                        Tenha especialistas dedicados ao seu negócio, que cuidam diariamente de toda contabilidade da sua empresa.
                    </p>
                </div>

                {/* Grade de cards de benefícios */}
                <div className={styles.grid}>
                    {/* Loop pelos benefícios e renderiza cada card */}
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};
