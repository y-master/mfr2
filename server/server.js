const express = require('express');
const cors = require('cors');
const recipesRouter = require('./routes/recipes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/recipes', recipesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
