const express = require('express');
const router = express.Router();
const db = require('../models/recipes');

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM recipes').all();
  res.json(rows.map(row => ({
    ...row,
    ingredients: JSON.parse(row.ingredients),
    steps: JSON.parse(row.steps)
  })));
});

router.post('/', (req, res) => {
  const { title, ingredients, steps, photoUrl, url } = req.body;
  const stmt = db.prepare(
    `INSERT INTO recipes (title, ingredients, steps, photoUrl, url)
     VALUES (?, ?, ?, ?, ?)`
  );
  const result = stmt.run(
    title,
    JSON.stringify(ingredients),
    JSON.stringify(steps),
    photoUrl,
    url
  );
  res.json({ id: result.lastInsertRowid });
});

module.exports = router;
