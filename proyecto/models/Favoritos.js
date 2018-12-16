const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema(
  {
    users: { type: Schema.Types.ObjectId, ref: "User" },
    recipes: { type: Schema.Types.ObjectId, ref: "Recipe" },
    ingredientList:{type: Schema.Types.ObjectId, ref: "ingredientList"}
    
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const favorites = mongoose.model("favorites", favoritesSchema);
module.exports = favorites;
