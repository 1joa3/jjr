// Importações React e ícones
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../styles/components/Hero.module.css';

// Importando a imagem do Hero
import homeImg from '../images/homeimg.webp';

// Componente Hero - seção principal/banner do site
export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Conteúdo textual do Hero */}
        <div className={styles.content}>
          {/* Badge de credibilidade */}
          <div className={styles.badge}>
            ✓ CRC Ativo e Regularizado
          </div>

          {/* Título principal com destaque */}
          <h1 className={styles.title}>
            Você cuida da sua empresa. <span className={styles.titleHighlight}>Nós cuidamos</span> da sua contabilidade.
          </h1>

          {/* Descrição/subtítulo */}
          <p className={styles.description}>
            Deixe a burocracia com a gente. Resolvemos tudo, desde a abertura do CNPJ até o dia a dia da sua contabilidade, para você focar no que realmente importa: <strong>fazer sua empresa crescer</strong>.
          </p>

          {/* Caixa com lista de benefícios */}
          <div className={styles.benefitsBox}>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.benefitIcon} />
                <span>Sua empresa regularizada e sem multas indesejadas</span>
              </li>
              <li className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.benefitIcon} />
                <span>Economia no pagamento de impostos de forma legal</span>
              </li>
              <li className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.benefitIcon} />
                <span>Suporte com contadores especialistas via WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Botões de call-to-action */}
          <div className={styles.ctaButtons}>
            {/* Botão primário */}
            <a href="#contato" className={styles.primaryButton}>
              Começar Agora
              <ArrowRight size={20} />
            </a>
            {/* Botão secundário */}
            <a href="#servicos" className={styles.secondaryButton}>
              Conhecer Serviços
            </a>
          </div>

          {/* Features adicionais */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <CheckCircle2 size={18} />
              <span>+7 anos de experiência</span>
            </div>

            <div className={styles.feature}>
              <CheckCircle2 size={18} />
              <span>Suporte humanizado</span>
            </div>
          </div>
        </div>

        {/* Container da imagem do Hero */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img
              src={homeImg}
              alt="Contabilidade estratégica"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
