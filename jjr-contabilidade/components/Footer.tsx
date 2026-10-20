// Importações React e ícones
import React from 'react';
import { Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Logo, WHATSAPP_URL } from './ui';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/jjrcontabilidade/', Icon: Instagram },
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: MessageCircle },
  { label: 'E-mail', href: 'mailto:contato@jjrcontabilidade.com.br', Icon: Mail },
];

// Componente de Rodapé do site
export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 pt-20 pb-10 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          {/* Marca e redes sociais */}
          <div className="space-y-6">
            <a href="#" className="inline-block" aria-label="JJR Contabilidade - início">
              <Logo light />
            </a>
            <p className="max-w-xs leading-relaxed">
              Especialistas em contabilidade estratégica e consultoria financeira para empresas de todos os portes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">Serviços</h3>
            <ul className="space-y-3">
              {['Abertura de Empresa', 'Contabilidade Mensal', 'Migração de Contabilidade', 'MEI para ME', 'Imposto de Renda'].map(
                (item) => (
                  <li key={item}>
                    <a href="#servicos" className="transition-colors hover:text-white">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors hover:text-white">Início</a></li>
              <li><a href="#diferenciais" className="transition-colors hover:text-white">Diferenciais</a></li>
              <li><a href="#como-funciona" className="transition-colors hover:text-white">Equipe</a></li>
              <li><a href="#duvidas" className="transition-colors hover:text-white">Dúvidas frequentes</a></li>
              <li><a href="#contato" className="transition-colors hover:text-white">Falar com consultor</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">Fale conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  (83) 99100-6990
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <a href="mailto:contato@jjrcontabilidade.com.br" className="break-all hover:text-white">
                  contato@jjrcontabilidade.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <span>Av. Comendador Renato Ribeiro Coutinho, 1097, 1° andar, Sala 3 - Sapé, PB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p suppressHydrationWarning>© {new Date().getFullYear()} JJR Contabilidade. Todos os direitos reservados.</p>
          <p className="text-slate-500">
            Desenvolvido por <span className="font-semibold text-slate-400">Cocreate</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
