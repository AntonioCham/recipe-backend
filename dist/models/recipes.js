import { Int32 } from "mongodb";
import mongoose from "mongoose";
const recipeSchema = new mongoose.Schema({
    recipesName: { type: String },
    ingredients: [{ type: String }],
    step: [{ type: String }],
    Time: { type: Int32 }
});
export const recipesModel = mongoose.model('Recipe', recipeSchema);
//# sourceMappingURL=recipes.js.map