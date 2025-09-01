import db from '../dbConfig.js';

export const getFilmes = (req, res) => {
  db.all('SELECT * FROM filmes', [], (error, rows) => {
    if (error) {
      return res.status(500).json({ erro: error.message });
    }
    res.status(200).json(rows);
  });
};

export const postFilme = (req, res) => {
  const { titulo, imagem, banner, categoria } = req.body; 
  if (!titulo || !imagem || !banner || !categoria) {
    return res.status(400).json({ erro: 'Campos "titulo", "imagem", "banner" e "categoria" são obrigatórios.' });
  }

  const params = [titulo, imagem, banner, categoria];
  db.run('INSERT INTO filmes (titulo, imagem, banner, categoria) VALUES (?, ?, ?, ?)', params, function (error) {
    if (error) {
      return res.status(500).json({ erro: error.message });
    }
    res.status(201).json({
       id: this.lastID, 
       titulo, 
       imagem, 
       banner, 
       categoria 
      });
  });
}