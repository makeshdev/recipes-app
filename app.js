import express from "express";
import recipeRoutes from "./routes/recipes.route.js";

const app = express();
const PORT = 3005;

app.get("/", (req, res) => {
  res.json({
    message: "Hello Node JS",
  });
});

// CURD

app.use("/api/v1", recipeRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
