const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Recipe = require("../models/Recipes")
// const User = require("../models/User")

const favoritesSchema = new Schema(
  {
    users: { type: Schema.Types.ObjectId, ref: "User" },
    recipes: { type: Schema.Types.ObjectId, ref: "Recipe" }
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
