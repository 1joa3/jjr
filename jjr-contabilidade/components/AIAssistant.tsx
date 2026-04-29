// Importações React, hooks e ícones
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { geminiService } from '../services/geminiService';

// Componente de Assistente IA - Chat interativo com IA
export const AIAssistant: React.FC = () => {
  // Estado para controlar se o chat está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  // Array de mensagens do chat
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o assistente da JJR Contabilidade. Como posso ajudar sua empresa hoje?' }
  ]);
  // Texto digitado pelo usuário
  const [input, setInput] = useState('');
  // Estado de carregamento (quando esperando resposta da IA)
  const [isLoading, setIsLoading] = useState(false);
  // Referência para scroll automático
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hook para scroll automático quando novas mensagens aparecem
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Função para enviar mensagem e obter resposta da IA
  const handleSend = async () => {
    if (!input.trim() || isLoading) return; // Não envia se vazio ou carregando

    const userText = input;
    setInput(''); // Limpa campo de input
    setMessages(prev => [...prev, { role: 'user', text: userText }]); // Adiciona mensagem do usuário
    setIsLoading(true); // Ativa loading

    // Chama serviço de IA
    const botResponse = await geminiService.askAccountingQuestion(userText);

    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]); // Adiciona resposta do bot
    setIsLoading(false); // Desativa loading
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Botão flutuante para abrir o chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        >
          <MessageSquare size={28} />
          {/* Tooltip que aparece ao passar o mouse */}
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Dúvida Contábil? Fale comigo!
          </span>
        </button>
      )}

      {/* Janela do Chat */}
      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10">

          {/* Cabeçalho do chat */}
          <div className="bg-blue-900 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              {/* Ícone do bot */}
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              {/* Nome e status online */}
              <div>
                <p className="font-bold text-sm">JJR AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  {/* Indicador verde piscante de "online" */}
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-blue-200">Online agora</span>
                </div>
              </div>
            </div>
            {/* Botão para fechar */}
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Área de mensagens (scrollável) */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {/* Loop pelas mensagens */}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {/* Balão de mensagem com cores diferentes para usuário e bot */}
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {/* Indicador de "digitando" quando IA está processando */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex gap-1">
                  {/* Três pontos animados */}
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Campo de input e botão de envio */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              {/* Input de texto */}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} // Envia ao pressionar Enter
                placeholder="Qual sua dúvida contábil?"
                className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {/* Botão de enviar */}
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
            {/* Aviso sobre IA */}
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Assistente Virtual IA • Respostas podem variar
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
