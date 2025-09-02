import express from 'express';
import db from './dbConfig.js';
import routes from './routes.js';
import cors from 'cors';
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Acesse a rota /api/filmes para ver os filmes cadastrados.');
});
app.use(express.json());
db;
app.use('/api', routes);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/api/filmes`);
});