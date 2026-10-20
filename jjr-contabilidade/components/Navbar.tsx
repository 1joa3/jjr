// Importações React e ícones
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo, WHATSAPP_URL } from './ui';

// Links de navegação do menu
const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Equipe', href: '#como-funciona' },
  { name: 'Contato', href: '#contato' },
];

// Componente de navegação principal do site
export const Navbar: React.FC = () => {
  // Estado para controlar se a página foi rolada (adiciona estilo diferente)
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar abertura/fechamento do menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'border-b border-slate-200/80 bg-white/90 py-3 shadow-[0_1px_12px_rgba(11,27,56,0.06)] backdrop-blur-md'
          : 'border-b border-transparent bg-white/0 py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#" aria-label="JJR Contabilidade - início">
          <Logo />
        </a>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[0.94rem] font-medium text-slate-600 transition-colors hover:text-navy-900 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand-600 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 lg:inline-flex"
        >
          <MessageCircle size={16} />
          Falar com um contador
        </a>

        {/* Botão toggle do menu mobile */}
        <button
          className="rounded-md p-2 text-navy-900 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block border-b border-slate-100 py-4 text-lg font-medium text-navy-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-3.5 font-semibold text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageCircle size={18} />
            Falar com um contador
          </a>
        </div>
      )}
    </header>
  );
};
