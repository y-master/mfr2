const Database = require('better-sqlite3');
const db = new Database('./db/recipes.db');

// Création de la table si elle n'existe pas
db.exec(`
CREATE TABLE IF NOT EXISTS recipes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  ingredients TEXT,
  steps TEXT,
  photoUrl TEXT,
  url TEXT
);
`);

module.exports = db;
