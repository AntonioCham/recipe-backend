import express from "express"
import controller from "../controllers/recipeController"

const router = express.Router();

router.post('/create', controller.addRecipe);
router.get('/get/:recipeId', controller.getRecipeById);
router.get('/get', controller.getAllRecipe);
router.patch('/update/:recipeId', controller.updateRecipe);
router.delete('/delete/:recipeId', controller.deleteRecipe);

export default router;