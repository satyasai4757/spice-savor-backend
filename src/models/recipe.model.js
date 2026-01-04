const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    cookingTime: String,
    summary: String,
    level: String,
    category: String,
    image: String,
    author: String,
    ingredients: [String],
    steps: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recipe', recipeSchema);
