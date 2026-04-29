// Importação do SDK do Google Generative AI (Gemini)
import { GoogleGenAI } from "@google/genai";

// Classe de serviço para integração com a API Gemini
// Responsável por processar perguntas contábeis através da IA
export class GeminiService {
  /**
   * Envia uma pergunta do usuário para o modelo Gemini e retorna a resposta em texto.
   * Segue as diretrizes do SDK @google/genai.
   * 
   * @param question - Pergunta do usuário sobre contabilidade
   * @returns Promise com a resposta em texto da IA
   */
  async askAccountingQuestion(question: string): Promise<string> {
    // Cria uma nova instância do GoogleGenAI antes de fazer a chamada à API
    // A chave da API é obtida da variável de ambiente VITE_GEMINI_API_KEY (convenção Vite)
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Verifica se a API key está configurada corretamente
    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
      return "O assistente de IA está temporariamente indisponível. Por favor, entre em contato conosco através do formulário ou WhatsApp.";
    }

    // Inicializa o cliente da API Gemini
    const ai = new GoogleGenAI({ apiKey });

    try {
      // Chama o modelo com a pergunta do usuário
      // Configura o modelo para responder como assistente da JJR Contabilidade
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview', // Modelo Gemini a ser usado
        contents: `Você é o assistente virtual da JJR Contabilidade. Responda de forma profissional e amigável em português do Brasil. O usuário perguntou: ${question}`,
        config: {
          // Instrução de sistema que define o comportamento da IA
          systemInstruction: "Você é um assistente de IA especialista em contabilidade brasileira para a JJR Contabilidade. Ajude potenciais clientes com dúvidas sobre abertura de empresas, impostos, MEI e gestão financeira. Seja direto e encoraje o contato com a equipe humana ao final de cada resposta.",
          temperature: 0.7, // Controla criatividade da resposta (0.0 = mais determinística, 1.0 = mais criativa)
        },
      });

      // Retorna o texto da resposta ou mensagem de erro padrão
      return response.text || "Desculpe, não consegui processar sua dúvida agora. Por favor, entre em contato conosco diretamente pelo formulário.";
    } catch (error) {
      // Loga o erro no console para debug
      console.error("Gemini API Error:", error);
      // Retorna mensagem amigável em caso de erro
      return "Houve um erro ao consultar nosso assistente. Tente novamente mais tarde.";
    }
  }
}

// Exporta uma instância única do serviço (Singleton pattern)
// Pode ser importada e usada em qualquer componente
export const geminiService = new GeminiService();
