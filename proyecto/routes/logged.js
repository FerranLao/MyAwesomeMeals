const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");
const User = require("../models/User");
const { isLoggedIn } = require("../middlewares/IsLogged");
const uploadCloud = require("../multer/cloudinary.js");

router.get("/main", isLoggedIn("/"), (req, res, next) => {
  const user = req.user;
  res.render("logged/main", { user });
});

router.get("/meals", isLoggedIn("/"), (req, res, next) => {
  res.render("logged/misplatos");
});

router.get("/newmeal", isLoggedIn("/"), (req, res, next) => {
  res.render("logged/crearplato");
});

router.get("/allmeals", isLoggedIn("/"), (req, res, next) => {
  let recipes = [];
  req.user.meals.forEach(e => {
    Recipe.findById(e).then(recipe => {
      recipes.push(recipe);
    });
  });
  //guarrada
  setTimeout(function() {
    console.log(recipes);
    res.render("logged/allplatos", { recipes });
  }, 50);
});

router.get("/meals/:id", isLoggedIn("/"), (req, res, next) => {
  res.render("logged/plato");
});

router.get("/platos/:id/editar", isLoggedIn("/"), (req, res, next) => {
  res.render("logged/platoedit");
});

router.get("/newplan", isLoggedIn("/"), (req, res, next) => {
  res.render("logged/newplaning");
});

router.get("/lista", isLoggedIn("/"), (req, res, next) => {
  res.render("logged/lista");
});

router.get("/getrecipes", isLoggedIn("/"), (req, res, next) => {
  console.log("hola");
  res.render("logged/getrecipes");
});

router.post(
  "/newmeal",
  [isLoggedIn("/"), uploadCloud.single("photo")],
  (req, res, next) => {
    const { name, ingredient } = req.body;
    Recipe.findOne({ name }).then(recipe => {
      if (recipe == null) {
        const ingredients = ingredient.filter(Boolean);
        let imgPath;
        if (req.file) {
          imgPath = req.file.url;
        } else {
          imgPath =
            "http://res.cloudinary.com/aaronreina/image/upload/v1543767688/MyAwesomeMeals/my-file-name.jpg";
        }
        Recipe.create({ name, imgPath, ingredients }).then(recipe => {
          console.log("eii", recipe._id);
          const _id = req.user._id;
          const recipeId = recipe._id;
          User.findOneAndUpdate({ _id }, { $push: { meals: recipeId } }).then(
            () => res.redirect("/")
          );
        });
      } else {
        res.render("logged/crearplato", { message: "Name already taken" });
      }
    });
  }
);

//prueba post axios
router.post("/addmeal", isLoggedIn("/"), (req, res, next) => {
  const { name, imgPath, ingredients } = req.body;
  Recipe.findOne({ name }).then(recipe => {
    if (recipe == null) {
      console.log();
      Recipe.create({ name, imgPath, ingredients }).then(recipes => {
        console.log("recipe added");
        const _id = req.user._id;
        const recipeId = recipes._id;
        User.findById(_id).then(user => {
          console.log(user.meals);
          if (req.user.meals.indexOf(recipeId) == -1) {
            User.findByIdAndUpdate(
              { _id },
              { $push: { meals: recipeId } }
            ).then(e => console.log(e.meals));
          }
        });
      });
    } else {
      const _id = req.user._id;
      const recipeId = recipe._id;
      User.findById(_id).then(user => {
        if (user.meals.indexOf(recipeId) == -1) {
          User.findOneAndUpdate({ _id }, { $push: { meals: recipeId } }).then(
            e => console.log(e)
          );
        } else {
          console.log("already exist");
        }
      });
    }
  });
});

router.post("/recipeRemove", isLoggedIn("/"), (req, res, next) => {
  const { name } = req.body;
  const { _id } = req.user;
  Recipe.findOne({ name }).then(recipe => {
    const id = recipe._id;
    User.findByIdAndUpdate({ _id }, { $pullAll: { meals: [id] } }).then(() =>
      console.log("done")
    );
  });
});

module.exports = router;
