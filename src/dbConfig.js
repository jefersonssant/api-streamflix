import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./filmes.db', (error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS filmes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      imagem TEXT NOT NULL,
      banner TEXT NOT NULL,
      categoria TEXT NOT NULL
    )
  `, (error) => {
    if (error) {
      console.error('Erro ao criar tabela "filmes":', error.message);
    } else {
      console.log('Tabela "filmes" pronta.');
    }
  });
});

export default db;