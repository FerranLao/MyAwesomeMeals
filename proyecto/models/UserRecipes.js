const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userRecipesSchema = new Schema({
  userId:String,
  recipesId:Array,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const UserRecipes = mongoose.model('UserRecipes', userRecipesSchema);
module.exports = UserRecipes;
