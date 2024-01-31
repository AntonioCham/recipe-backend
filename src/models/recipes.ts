import { Int32 } from "mongodb";
import mongoose from "mongoose";

export interface IRecipe {
    recipesName: string
    ingredients: string
    step: [string],
    timeToCook: number
}

export interface IRecipeModel extends IRecipe, Document{}

const RecipeSchema = new mongoose.Schema({
    recipeName: { type: String, required: true },
    ingredients: [ {type: String, required: true} ],
    steps: [ { type: String, required: true} ],
    timeToCook: { type: Number, require: true }
})

export default mongoose.model<IRecipeModel>('Recipe', RecipeSchema);
