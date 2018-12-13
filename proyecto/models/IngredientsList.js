const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientListSchema = new Schema(
  {
    recipe: { type: Schema.Types.ObjectId, ref: "Recipe" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    ingredient: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }]
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
