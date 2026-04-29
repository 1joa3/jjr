// Importações React e ícones
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

// Componente de Formulário de Contato
export const ContactForm: React.FC = () => {
  // Estado para controlar o status do formulário (inicial, enviando, sucesso)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  // Estado para controlar o select de serviços
  const [selectedService, setSelectedService] = useState<string>('');

  // Função para processar envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne reload da página
    setFormStatus('sending'); // Marca como enviando

    // Coleta dos dados do formulário
    const formData = new FormData(e.currentTarget);
    formData.append('_captcha', 'false'); // Desativa captcha padrão
    formData.append('_template', 'box'); // Deixa o e-mail que chega muito mais bonito
    formData.append('_subject', `Novo Contato do Site: ${formData.get('nome') || 'Cliente'}`); // Assunto dinâmico
    
    // Configurações extras de tratamento
    const emailValue = formData.get('email');
    if (emailValue) {
      formData.append('_replyto', emailValue.toString()); // Permite responder direto ao cliente
    }
    
    // Envia uma resposta automática para o cliente que preencheu o formulário
    formData.append(
      '_autoresponse', 
      'Olá! Recebemos sua mensagem. A equipe da JJR Contabilidade já está analisando o seu caso e retornaremos o contato em breve. Obrigado!'
    );

    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@jjrcontabilidade.com.br', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        alert('Erro ao enviar mensagem. Tente novamente.');
        setFormStatus('idle');
      }
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
      setFormStatus('idle');
    }
  };

  // Se enviado com sucesso, mostra mensagem de confirmação
  if (formStatus === 'success') {
    return (
      <section id="contato" className="py-24 bg-[#0e4ba8] text-white flex items-center justify-center min-h-[600px]">
        <div className="text-center space-y-6 max-w-lg px-4">
          {/* Ícone de confirmação */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-lg mb-4">
            <CheckCircle size={48} className="text-white" />
          </div>
          {/* Mensagem de sucesso */}
          <h3 className="text-3xl md:text-4xl font-bold">Mensagem Recebida!</h3>
          <p className="text-slate-200 text-lg">
            Nossa equipe de especialistas entrará em contato com você em até 24 horas úteis. Obrigado por escolher a JJR.
          </p>
          {/* Botão para enviar nova mensagem */}
          <button
            onClick={() => setFormStatus('idle')}
            className="px-8 py-3 bg-white text-[#0e4ba8] font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Enviar Nova Mensagem
          </button>
        </div>
      </section>
    );
  }

  // Formulário principal
  return (
    <section id="contato" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Card do formulário com duas colunas */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl border-2 border-slate-200 flex flex-col lg:flex-row">

          {/* Lado esquerdo: Formulário */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Comece seu novo capítulo agora</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Linha 1: Nome e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                  <input name="nome" required type="text" placeholder="Ex: João Silva" className="w-full px-4 py-3 rounded-md border-2 border-slate-300 focus:outline-none focus:border-[#0e4ba8] bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">E-mail Corporativo</label>
                  <input name="email" required type="email" placeholder="email@empresa.com.br" className="w-full px-4 py-3 rounded-md border-2 border-slate-300 focus:outline-none focus:border-[#0e4ba8] bg-white transition-colors" />
                </div>
              </div>

              {/* Linha 2: Telefone e Serviço */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                  <input name="telefone" required type="tel" placeholder="(00) 00000-0000" className="w-full px-4 py-3 rounded-md border-2 border-slate-300 focus:outline-none focus:border-[#0e4ba8] bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Qual serviço deseja?</label>
                  <select
                    name="servico"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border-2 border-slate-300 focus:outline-none focus:border-[#0e4ba8] bg-white transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="abrir">Abrir Empresa</option>
                    <option value="trocar">Trocar de Contador</option>
                    <option value="mei">Abertura MEI</option>
                    <option value="transicao">Mudar de MEI para ME</option>
                    <option value="outros">Outros</option>
                  </select>
                  {/* Campo extra condicional se selecionar 'Outros' */}
                  {selectedService === 'outros' && (
                    <input
                      required
                      type="text"
                      name="servicoOutros"
                      placeholder="Por favor, especifique o serviço..."
                      className="w-full px-4 py-3 rounded-md border-2 border-slate-300 focus:outline-none focus:border-[#0e4ba8] bg-white transition-colors mt-3"
                    />
                  )}
                </div>
              </div>

              {/* Tipo de negócio - Radio buttons estilizados */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Qual é o seu tipo de negócio?*</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Serviço', 'Comércio', 'Indústria', 'Serviço e Comércio'].map((tipo) => (
                    <label key={tipo} className="cursor-pointer">
                      <input type="radio" value={tipo} name="negocio" required className="peer sr-only" />
                      <div className="h-full min-h-[48px] px-4 py-3 rounded-md border-2 border-slate-300 bg-white text-center text-xs font-semibold peer-checked:bg-[#0e4ba8] peer-checked:border-[#0e4ba8] peer-checked:text-white transition-all flex items-center justify-center">
                        {tipo}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Botão de envio */}
              <div className="pt-4">
                <button
                  disabled={formStatus === 'sending'}
                  type="submit"
                  className="w-full py-4 bg-[#0e4ba8] hover:bg-[#1c3e7e] text-white font-semibold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {formStatus === 'sending' ? 'Enviando...' : (
                    <>
                      Enviar para o Contador
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Lado direito: Informações e benefícios */}
          <div className="lg:w-2/5 bg-[#0e4ba8] text-white p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-white">Por que nos procurar?</h4>
              {/* Lista de benefícios */}
              <ul className="space-y-6">
                {[
                  'Diagnóstico gratuito da situação fiscal',
                  'Resposta rápida e objetiva',
                  'Planejamento tributário inicial sem custo',
                  'Foco em resultados e economia'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="text-white shrink-0" size={24} />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Citação da equipe */}
            <div className="mt-12 p-6 rounded-lg bg-white/10 border border-white/20">
              <p className="text-sm italic text-slate-200">
                "Nosso compromisso é transformar a complexidade da contabilidade em um diferencial competitivo para o seu negócio."
              </p>
              <p className="mt-4 font-semibold">— Time JJR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
