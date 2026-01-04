const router = require('express').Router();
const controller = require('../controllers/recipe.controller');

router.get('/', controller.getAllRecipes);
router.get('/:id', controller.getRecipeById);
router.post('/', controller.createRecipe);

module.exports = router;
