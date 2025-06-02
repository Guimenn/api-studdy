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

async function generateResume(req, res) {
    if (!openai) {
        return res.status(500).json({ error: "OpenAI não está configurado corretamente. Verifique a chave API." });
    }

    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Informe o titulo para gerar o resumo." });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "Você é um assistente especializado em criar resumos detalhados e bem estruturados."
                },
                {
                    role: "user",
                    content: `Por favor, crie um resumo BEM EXTENSO e detalhado do seguinte titulo, mantendo os pontos principais e organizando as informações de forma clara e estruturada:

${title}

O resumo deve incluir:  
- Principais tópicos e conceitos
- Exemplos relevantes
- Conclusões importantes
- Relacionamentos entre as ideias`
                }
            ],
            max_tokens: 2000,
            temperature: 0.7
        });

        const resposta = completion.choices?.[0]?.message?.content;

        if (!resposta) {
            return res.status(500).json({ error: "Resposta do OpenAI vazia ou inválida" });
        }

        res.json({ resume: resposta });
    } catch (error) {
        console.error("Erro ao gerar resumo:", error);
        res.status(500).json({ error: "Erro ao gerar resumo" });
    }
};

export { generateResume };