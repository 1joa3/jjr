// Importações React e ícones
import React, { useState } from 'react';
import { Send, CheckCircle2, Check, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { SectionHeading } from './ui';

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10';
const labelClass = 'mb-2 block text-sm font-medium text-slate-700';

// Componente de Formulário de Contato
export const ContactForm: React.FC = () => {
  // Estado para controlar o status do formulário
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  // Estado para controlar o select de serviços
  const [selectedService, setSelectedService] = useState<string>('');

  // Função para processar envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    // Coleta dos dados do formulário
    const formData = new FormData(e.currentTarget);
    formData.append('_captcha', 'false'); // Desativa captcha padrão
    formData.append('_template', 'box'); // Deixa o e-mail que chega muito mais bonito
    formData.append('_subject', `Novo Contato do Site: ${formData.get('nome') || 'Cliente'}`); // Assunto dinâmico

    // Permite responder direto ao cliente
    const emailValue = formData.get('email');
    if (emailValue) {
      formData.append('_replyto', emailValue.toString());
    }

    // Envia uma resposta automática para o cliente que preencheu o formulário
    formData.append(
      '_autoresponse',
      'Olá! Recebemos sua mensagem. A equipe da JJR Contabilidade já está analisando o seu caso e retornaremos o contato em breve. Obrigado!'
    );

    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@jjrcontabilidade.com.br', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      setFormStatus(response.ok ? 'success' : 'error');
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contato" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_30px_60px_-30px_rgba(11,27,56,0.25)] lg:grid-cols-[1.35fr_1fr]">
          {/* Lado esquerdo: Formulário */}
          <div className="bg-white p-8 md:p-12 lg:p-14">
            {formStatus === 'success' ? (
              <div className="flex h-full flex-col items-start justify-center py-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={34} />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl">Mensagem recebida!</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
                  Nossa equipe de especialistas entrará em contato com você em até 24 horas úteis. Obrigado por escolher
                  a JJR.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 rounded-full border border-slate-300 px-7 py-3 font-semibold text-navy-900 transition-colors hover:border-navy-900"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <>
                <SectionHeading align="left" eyebrow="Contato" title="Comece seu novo capítulo agora" />

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className={labelClass}>Nome completo</label>
                      <input id="nome" name="nome" required type="text" autoComplete="name" placeholder="Ex: João Silva" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>E-mail</label>
                      <input id="email" name="email" required type="email" autoComplete="email" placeholder="email@empresa.com.br" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="telefone" className={labelClass}>Telefone / WhatsApp</label>
                      <input id="telefone" name="telefone" required type="tel" autoComplete="tel" placeholder="(00) 00000-0000" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="servico" className={labelClass}>Qual serviço deseja?</label>
                      <select
                        id="servico"
                        name="servico"
                        required
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className={inputClass}
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
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Tipo de negócio */}
                  <fieldset>
                    <legend className={labelClass}>Qual é o seu tipo de negócio?</legend>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                      {['Serviço', 'Comércio', 'Indústria', 'Serviço e Comércio'].map((tipo) => (
                        <label key={tipo} className="cursor-pointer">
                          <input type="radio" value={tipo} name="negocio" required className="peer sr-only" />
                          <div className="flex h-full min-h-[48px] items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-3 text-center text-sm font-medium text-slate-700 transition-all hover:border-slate-400 peer-checked:border-navy-900 peer-checked:bg-navy-900 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand-600/20">
                            {tipo}
                          </div>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {formStatus === 'error' && (
                    <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                      Não foi possível enviar sua mensagem. Tente novamente ou fale conosco pelo WhatsApp.
                    </p>
                  )}

                  <button
                    disabled={formStatus === 'sending'}
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 py-4 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700 disabled:opacity-70"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar para o contador
                        <Send size={18} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Seus dados são usados apenas para retornarmos o seu contato.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Lado direito: Informações e benefícios */}
          <div className="relative flex flex-col justify-between gap-12 overflow-hidden bg-navy-900 p-8 text-white md:p-12 lg:p-14">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div aria-hidden className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative">
              <h3 className="font-serif text-2xl font-semibold">Por que nos procurar?</h3>
              <ul className="mt-8 space-y-5">
                {[
                  'Diagnóstico gratuito da situação fiscal',
                  'Resposta rápida e objetiva',
                  'Planejamento tributário inicial sem custo',
                  'Foco em resultados e economia',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="relative space-y-4 border-t border-white/10 pt-8 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-300" />
                <a href="https://wa.me/5583991006990" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  (83) 99100-6990
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-300" />
                <a href="mailto:contato@jjrcontabilidade.com.br" className="hover:text-white">
                  contato@jjrcontabilidade.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-300" />
                <span>Av. Comendador Renato Ribeiro Coutinho, 1097, 1° andar, Sala 3 - Sapé, PB</span>
              </li>
            </ul>

            <figure className="relative rounded-xl border border-white/10 bg-white/5 p-6">
              <blockquote className="font-serif italic leading-relaxed text-slate-200">
                “Nosso compromisso é transformar a complexidade da contabilidade em um diferencial competitivo para o
                seu negócio.”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-white">— Time JJR</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
