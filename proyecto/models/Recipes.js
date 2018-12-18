const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
  idMeal:String,
  name:String,
  imgPath:{type:String, default:"http://res.cloudinary.com/aaronreina/image/upload/v1543767688/MyAwesomeMeals/my-file-name.jpg"},
  type:String,
  tips:[String],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
