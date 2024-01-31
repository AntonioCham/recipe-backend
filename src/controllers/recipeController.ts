import express from "express";
import Recipe from "../models/recipes";
import mongoose from "mongoose";
import { APIRes } from "../types/res";

export const addRecipe = async (req: express.Request, res: express.Response) => {
        const{ recipeName, ingredients, steps, timeToCook } = req.body;

        const recipe = new Recipe({
            _id: new mongoose.Types.ObjectId(),
            recipeName,
            ingredients,
            steps,
            timeToCook
        })

        return recipe.save()
        .then((recipe) => {
            const content: APIRes = {
                statusCode: 201,
                message: 'add recipe successfully',
                error: '',
                data: recipe
             }
            return res.status(201).json({content})
        })
        .catch((error) => {
             const content: APIRes = {
                statusCode: 500,
                message: 'error occurs',
                error: error,
                data: []
             }
             return res.status(500).json({content})
        });
}

export const getRecipeById = async (req: express.Request, res: express.Response) => {
    const recipeId = req.params.recipeId;

    return Recipe.findById(recipeId)
    .then((recipe) => {
        if(recipe){
            const content: APIRes = {
                statusCode: 200,
                message: 'fetch recipe by Id successfully',
                error: '',
                data: recipe
            }
            return res.status(200).json({content});
        }
        const content: APIRes = {
            statusCode: 404,
            message: 'record not found',
            error: 'record not found',
            data: []
        }
        return res.status(404).json({ content })
    })
    .catch((error) => {
        const content: APIRes = {
            statusCode: 500,
            message: 'error occurs',
            error: error,
            data: []
        }
        return res.status(500).json({ content });
    });
}

export const getAllRecipe = async (req: express.Request, res: express.Response) => {
    return Recipe.find()
    .then((recipes) => {
        const content: APIRes = {
            statusCode: 200,
            message: 'fetch all recipe successfully',
            error: '',
            data: recipes
        }
        return res.status(200).json({content})
    })
    .catch((error) => {
        const content: APIRes = {
            statusCode: 500,
            message: 'error occurs',
            error: error,
            data: []
        }
        return res.status(500).json({ content });
    });
}

export const updateRecipe = async (req: express.Request, res: express.Response) => {
    const recipeId = req.params.recipeId;

    return Recipe.findById(recipeId)
    .then((recipe) => {
        if(!recipe){
            const content: APIRes = {
                statusCode: 404,
                message: 'record not found',
                error: 'record not found',
                data: []
            }
            return res.status(404).json({ content })
        }

        recipe.set(req.body);
        return recipe.save()
        .then((recipe) => {
            const content: APIRes = {
                statusCode: 201,
                message: 'update recipe successfully',
                error: '',
                data: recipe
             }
            return res.status(201).json({content})
        })
        .catch((error) => {
            const content: APIRes = {
                statusCode: 500,
                message: 'error occurs',
                error: error,
                data: []
            }
            return res.status(500).json({ content });
        })
    })
    .catch((error) => {
        const content: APIRes = {
            statusCode: 500,
            message: 'error occurs',
            error: error,
            data: []
        }
        return res.status(500).json({ content });
    });
}

export const deleteRecipe = async (req: express.Request, res: express.Response) => {
    const recipeId = req.params.recipeId;

    return Recipe.findByIdAndDelete(recipeId)
    .then((recipe) => {
        if(recipe){
            const content: APIRes = {
                statusCode: 201,
                message: 'delete recipe successfully',
                error: '',
                data: []
             }
            return res.status(201).json({content})
        }

        const content: APIRes = {
            statusCode: 404,
            message: 'record not found',
            error: 'record not found',
            data: []
        }
        return res.status(404).json({ content })
    })
    .catch((error) => {
        const content: APIRes = {
            statusCode: 500,
            message: 'error occurs',
            error: error,
            data: []
        }
        return res.status(500).json({ content });
    });
}

export default { getAllRecipe, getRecipeById, deleteRecipe, updateRecipe, addRecipe };