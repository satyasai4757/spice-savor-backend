const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cookingTime: { type: String, required: true },
  summary: { type: String, required: true },
  level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  category: { type: String, enum: ['Veg', 'Non-Veg'], required: true },
  image: { type: [String], required: true },
  author: { type: String, required: true },
  ingredients: { type: String, required: true },
  steps: { type: [String], required: true }
}, { timestamps: true });


module.exports = mongoose.model('Recipe', recipeSchema);
