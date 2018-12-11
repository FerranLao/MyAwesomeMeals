require("dotenv").config();

const mongoose = require("mongoose");
const Ingredients = require("../models/Ingredients");

mongoose
  .connect(
    process.env.DB_URL,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
const ingredients = require('./recipes.json');
let ingredientok = [];
ingredients.forEach(e => {
  const recipe = {
    name: e.strIngredient,
    imgPath: `https://www.themealdb.com/images/ingredients/${
      e.strIngredient
    }-Small.png`
  };
  ingredientok.push(recipe);
});

Ingredients.collection.drop();
Ingredients.create(ingredientok).then(() =>{
  console.log("Ingredients database OK"),
  mongoose.disconnect()
}
);
