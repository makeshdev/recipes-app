import express from "express";
import recipeRoutes from "./routes/recipes.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 3005;

//data understanding middleware
app.use(express.json());

// connect DB
connectDB();

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
