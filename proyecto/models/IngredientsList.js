const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Ingredients = require("../models/Ingredients")

const ingredientListSchema = new Schema(
  {
    favorite:{ type: Schema.Types.ObjectId, ref: "Favoritos" },
    ingredient: [{ type: Schema.Types.ObjectId, ref: "ingredients" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const ingredientList = mongoose.model("ingredientList", ingredientListSchema);
module.exports = ingredientList;
