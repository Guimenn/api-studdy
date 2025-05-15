import express from 'express';
import questoesRotas from './routes/questoesRotas.js'
import authRotas from './routes/authRotas.js';
import gerarQuestao from './routes/gerarQuestao.js';
import cors from 'cors';
const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/questoes', questoesRotas);
app.use('/auth', authRotas)
app.use('/api', gerarQuestao)




app.get('/', (req, res) => {
	res.status(200).send("API de Questões");
})


app.options('/', (req, res) => {
	res.setHeader('Allow', 'GET, OPTIONS');
	res.status(204).send()
})
app.use((req, res) => {
	res.status(404).json({
		mensagem: 'Rota não encontrada'
	})
});


app.listen(PORT, () => {
	console.log(`Servidor Rodando em http://localhost:${PORT}`)
})