require('dotenv').config();


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Recipe = require("../models/Recipes");
const Ingredients = require("../models/Ingredients");
const ingredients = require('./recipes.json');
const bcryptSalt = 10;

function encript(password) {
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  return hashPass;
}
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

let users = [
  {
    
    username: "Antonio",
    password: encript("1"),
    email: "ninguno@ninguno.es",
    phone: "4532596234596",
    meals: ["52771", "52780"],
    active: true
  },
  {
    username: "Paco",
    password: encript("supercontraseña"),
    email: "paco@ninguno.es",
    phone: "4532596234596",
    meals: ["52817", "52935"],
    active: true
  },
  {
    username: "Lola",
    password: encript("pacopower"),
    email: "lola@ninguno.es",
    phone: "4532596234596",
    meals: ["52793", "52948"],
    active: true
  }
];

let recipes = [
  {
    idMeal: "52823",
    name: "Salmon Prawn Risotto",
    imgPath:
      "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
    type: "Seafood",
    ingredients: [
      "butter",
      "onion",
      "rice",
      "white wine",
      "vegetable stock",
      "lemon",
      "King Prawns",
      "salmon",
      "asparagus",
      "black pepper",
      "Parmesan"
    ]
  }
];

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
User.collection.drop();
Recipe.collection.drop();
Promise.all([
  User.create(users).then(() => console.log("User database OK")),
  Recipe.create(recipes).then(() => console.log("Movies database OK")),
  Ingredients.create(ingredientok).then((e) =>console.log(e.length+"Ingredients database OK"))
])
  .then(() => {
    mongoose.disconnect();
  })
  .catch(e => console.log("Error creating database", e));
