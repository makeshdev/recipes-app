import Recipe from "../models/recipes.model.js";

export const RecipeGet = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const RecipeDetail = async (req, res) => {
  try {
    const recipe = await Recipe.findById({ _id: req.params.id });
    if (recipe == null) {
      res.status(404).json({ message: "can not find data!" });
    } else {
      res.json(recipe);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const RecipePost = async (req, res) => {
  const newRecipe = new Recipe({
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc,
  });
  try {
    const recipe = await newRecipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const RecipePut = async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const RecipeDelete = async (req, res) => {
  try {
    await Recipe.findOneAndDelete({ _id: req.params.id });
    res.json({
      message: "Item Deleted!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
