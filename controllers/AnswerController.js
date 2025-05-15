import { listarQuestoes, obterQuestaoPorID, criarQuestao, atualizarQuestao, excluirQuestao } from '../models/Questao.js';
import { fileURLToPath } from 'url';
import path from 'path';
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialize OpenAI with error handling
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

const listarQuestoesController = async (req, res) => {
	try {
		const questoes = await listarQuestoes();
		res.status(200).json(questoes)
	} catch (err) {
		console.error('Erro ao listar Questoes ', err)
		res.status(500).json({ mensagem: 'Erro ao listar Questoes' })
	}
}

const obterQuestaoPorIDController = async (req, res) => {
	try {
		const Questao = await obterQuestaoPorID(req.params.id);
		if (Questao) {
			res.status(200).json(Questao)
		} else {
			res.status(404).json({ mensage: 'Questao não encontrada' })
		}
	} catch (err) {
		console.error('Erro ao obter Questao por ID: ', err)
		res.status(500).json({ mensagem: 'Erro ao listar Questao' })
	}
}

const criarQuestaoController = async (req, res) => {
	try {
		const { enunciado, alternativa_a, alternativa_b, alternativa_c, alternativa_d, correta, id_disciplina, id_professor } = req.body;

		let imgPath = null;

		if (req.file) {
			imgPath = req.file.path.replace(__dirname.replace('\\controllers', ''), '');
		}

		const QuestaoData = {
			enunciado: enunciado,
			alternativa_a: alternativa_a,
			alternativa_b: alternativa_b,
			alternativa_c: alternativa_c,
			alternativa_d: alternativa_d,
			correta: correta,
			imagem_questao: imgPath,
			id_disciplina: id_disciplina,
			id_professor: id_professor
		}

		const QuestaoId = await criarQuestao(QuestaoData);
		res.status(201).json({ mensagem: 'Questao criado com sucesso', QuestaoId });

	} catch (error) {
		console.error('Erro ao criar Questao: ', error)
		res.status(500).json({ mensagem: 'Erro ao criar Questao' })
	}
}

const atualizarQuestaoController = async (req, res) => {
	try {
		const QuestaoId = req.params.id;
		const { enunciado, alternativa_a, alternativa_b, alternativa_c, alternativa_d, correta, id_disciplina, id_professor } = req.body;

		let imgPath = null;

		if (req.file) {
			capaPath = req.file.path.replace(__dirname.replace('\\controllers', ''), '');
		}

		const QuestaoData = {
			enunciado: enunciado,
			alternativa_a: alternativa_a,
			alternativa_b: alternativa_b,
			alternativa_c: alternativa_c,
			alternativa_d: alternativa_d,
			correta: correta,
			imagem_questao: imgPath,
			id_disciplina: id_disciplina,
			id_professor: id_professor
		}

		await atualizarQuestao(QuestaoId, QuestaoData);
		res.status(201).json({ mensagem: 'Questao atualizado com sucesso' });

	} catch (error) {
		console.error('Erro ao atualizar Questao: ', error)
		res.status(500).json({ mensagem: 'Erro ao atualizar Questao' })
	}
}

const excluirQuestaoController = async (req, res) => {
	try {
		const QuestaoId = req.params.id;
		await excluirQuestao(QuestaoId)
	} catch (error) {
		console.error('Erro ao excluir Questao: ', error)
		res.status(500).json({ mensagem: 'Erro ao excluir Questao' })
	}
}

const generateAlternatives = async (req, res) => {
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

export { listarQuestoesController, obterQuestaoPorIDController, criarQuestaoController, atualizarQuestaoController, excluirQuestaoController, generateAlternatives }