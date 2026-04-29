// Importações React e ícones
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import styles from '../styles/components/Navbar.module.css';

// Componente de navegação principal do site
export const Navbar: React.FC = () => {
  // Estado para controlar se a página foi rolada (adiciona estilo diferente)
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar abertura/fechamento do menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hook para detectar scroll da página
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 20px, aplica estilo de navbar scrolled
      setIsScrolled(window.scrollY > 20);
    };
    // Adiciona listener de scroll
    window.addEventListener('scroll', handleScroll);
    // Remove listener ao desmontar componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links de navegação do menu
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : styles.navbarDefault}`}>
      <div className={styles.container}>
        {/* Logo da empresa */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <span>JJR</span>
          </div>
          <span className={styles.logoText}>
            Contabilidade
          </span>
        </a>

        {/* Menu Desktop - visível apenas em telas grandes */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.navLink}
            >
              {link.name}
            </a>
          ))}
          {/* Botão de call-to-action com link para WhatsApp */}
          <a href="https://wa.me/5583991006990" target="_blank" className={styles.ctaButton}>
            <Phone size={18} />
            Falar com Consultor
          </a>
        </div>

        {/* Botão toggle do menu mobile */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* Alterna entre ícone X (fechar) e Menu (abrir) */}
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile - aparece quando mobileMenuOpen é true */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)} // Fecha menu ao clicar
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className={styles.mobileCtaButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            Falar com Consultor
          </a>
        </div>
      )}
    </nav>
  );
};
