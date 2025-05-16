import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();
let openai;
try {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY não encontrada nas variáveis de ambiente');
    }
    openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
} catch (error) {
    console.error('Erro ao inicializar OpenAI:', error.message);
}


const gerarAlternativas = async (req, res) => {
    if (!openai) {
        return res.status(500).json({ error: "OpenAI não está configurado corretamente. Verifique a chave API." });
    }

    const { pergunta, respostaCorreta } = req.body;

    if (!pergunta || !respostaCorreta) {
        return res.status(400).json({ error: "Informe pergunta e respostaCorreta." });
    }
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de alternativas incorretas para quizzes."
                },
                {
                    role: "user",
                    content: `Pergunta: ${pergunta}
	  Resposta correta: ${respostaCorreta}
	  
	  Gere 3 alternativas erradas que sejam plausíveis mas incorretas. (apenas mande as respostas e mais nada)`
                }
            ],
            max_tokens: 150,
            temperature: 0.7
        });

        console.log(JSON.stringify(completion, null, 2)); // Para debug

        const resposta = completion.choices?.[0]?.message?.content;

        if (!resposta) {
            return res.status(500).json({ error: "Resposta do OpenAI vazia ou inválida" });
        }

        res.json({ alternativasErradas: resposta.split("\n").filter(Boolean) });
    } catch (error) {
        console.error("Erro ao gerar alternativas:", error);
        res.status(500).json({ error: "Erro ao gerar alternativas" });
    }

};

export { gerarAlternativas };