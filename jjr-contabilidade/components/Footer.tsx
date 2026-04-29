// Importações React e ícones
import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// Componente de Rodapé do site
export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Grade de 4 colunas em desktop, empilhadas em mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Coluna 1: Marca e redes sociais */}
          <div className="space-y-6">
            {/* Logo da empresa */}
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                <span className="text-blue-900 font-bold text-xl">JJR</span>
              </div>
              <span className="text-white text-xl font-bold tracking-tight">Contabilidade</span>
            </a>
            {/* Descrição da empresa */}
            <p className="text-slate-400 leading-relaxed">
              Especialistas em contabilidade estratégica e consultoria financeira para empresas de todos os portes.
            </p>
            {/* Ícones de redes sociais */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/jjrcontabilidade/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0e4ba8] transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0e4ba8] transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0e4ba8] transition-colors text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links de Serviços */}
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h5>
            <ul className="space-y-4">
              <li><a href="#servicos" className="hover:text-slate-200 transition-colors">Abertura de Empresa</a></li>
              <li><a href="#servicos" className="hover:text-slate-200 transition-colors">Contabilidade Mensal</a></li>
              <li><a href="#servicos" className="hover:text-slate-200 transition-colors">Migração de Contabilidade</a></li>
              <li><a href="#servicos" className="hover:text-slate-200 transition-colors">MEI para ME</a></li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis/Navegação */}
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Úteis</h5>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-slate-200 transition-colors">Home</a></li>
              <li><a href="#como-funciona" className="hover:text-slate-200 transition-colors">Como Funciona</a></li>
              <li><a href="#contato" className="hover:text-slate-200 transition-colors">Falar com Consultor</a></li>
              <li><a href="#" className="hover:text-slate-200 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 4: Informações de Contato */}
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Fale Conosco</h5>
            <ul className="space-y-4">
              {/* Telefone */}
              <li className="flex items-start gap-3">
                <Phone className="text-[#0e4ba8] bg-slate-800 p-1 rounded shrink-0" size={20} />
                <span>(83) 99100-6990</span>
              </li>
              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="text-[#0e4ba8] bg-slate-800 p-1 rounded shrink-0" size={20} />
                <span>contato@jjrcontabilidade.com.br</span>
              </li>
              {/* Endereço */}
              <li className="flex items-start gap-3">
                <MapPin className="text-[#0e4ba8] bg-slate-800 p-1 rounded shrink-0" size={20} />
                <span>Av. Comendador Renato Ribeiro Coutinho, 1097, 1° andar, Sala 3 - Sapé, PB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior com copyright e créditos */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 JJR Contabilidade. Todos os direitos reservados.
          </p>
          <p className="text-sm text-slate-600 flex items-center gap-1">
            Desenvolvido por <span className="font-bold text-slate-500"> Cocreate </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
