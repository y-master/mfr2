const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  steps: [String],
  photoUrl: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
