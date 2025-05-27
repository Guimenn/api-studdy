import express from 'express';
import rotas from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usando todas as rotas organizadas
app.use('/api', rotas);

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