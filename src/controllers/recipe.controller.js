const Recipe = require('../models/recipe.model');

// GET all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).json({ message: 'Recipe not found' });
  }
};

// POST create recipe
exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const saved = await recipe.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update recipe
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

