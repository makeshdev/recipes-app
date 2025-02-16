import express from "express";
import {
  RecipeGet,
  RecipePost,
  RecipePut,
  RecipeDelete,
} from "../controllers/recipes.controller.js";

const router = express.Router();
// CURD

// R - for Reading
router.get("/recipes", RecipeGet);

// C - for Creating
router.post("/recipes", RecipePost);

// U - for Updating
router.put("/recipes/:id", RecipePut);

// D - for Deleting
router.delete("/recipes/:id", RecipeDelete);

export default router;
