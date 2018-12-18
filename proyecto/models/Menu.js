const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  { 
    name: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    favorites:[{type: Schema.Types.ObjectId, ref: "favorites"}]   
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const menu = mongoose.model("menu", menuSchema);
module.exports = menu;
