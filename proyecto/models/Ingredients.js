const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ingredientSchema = new Schema({
  name:String,
  imgPath:{type:String, default:"http://res.cloudinary.com/aaronreina/image/upload/v1543767688/MyAwesomeMeals/my-file-name.jpg"},

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const ingredients = mongoose.model('ingredients', ingredientSchema);
module.exports = ingredients;
