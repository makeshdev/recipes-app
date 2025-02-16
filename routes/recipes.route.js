import express from "express";
import {
  RecipeGet,
  RecipePost,
  RecipePut,
  RecipeDelete,
  RecipeDetail,
} from "../controllers/recipes.controller.js";

const router = express.Router();
// CURD

// R - for Reading
router.get("/recipes", RecipeGet);

// R - for Reading single data
router.get("/recipes/:id", RecipeDetail);

// C - for Creating
router.post("/recipes", RecipePost);

// U - for Updating
router.put("/recipes/:id", RecipePut);

// D - for Deleting
router.delete("/recipes/:id", RecipeDelete);

export default router;
