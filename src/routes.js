import express from 'express';
import { getFilmes, postFilme } from './controller/filmes.js';

const router = express.Router();

router.get('/filmes', getFilmes);
router.post('/filmes', postFilme);

export default router;