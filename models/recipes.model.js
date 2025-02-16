import { model, Schema } from "mongoose";

//create schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

//create model
const Recipe = model("Recipe", schema);

export default Recipe;
