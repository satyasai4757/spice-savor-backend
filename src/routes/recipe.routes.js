const router = require('express').Router();
const controller = require('../controllers/recipe.controller');

router.get('/', controller.getAllRecipes);
router.get('/:id', controller.getRecipeById);
router.post('/', controller.createRecipe);
router.put('/:id', controller.updateRecipe);
router.delete('/:id', controller.deleteRecipe);
module.exports = router;
