const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");
const User = require("../models/User");
const Favorite = require("../models/Favoritos");
const Ingredients = require("../models/Ingredients");
const Menu = require("../models/Menu");
const IngredientsList = require("../models/IngredientsList");
const { isLoggedIn } = require("../middlewares/IsLogged");
const uploadCloud = require("../multer/cloudinary.js");
const stringSimilarity = require("string-similarity");

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

router.get("/newmeal/:id", isLoggedIn("/"), (req, res, next) => {
  res.render("logged/addingredients");
});

router.get("/allmeals", isLoggedIn("/"), (req, res, next) => {
  const userId = req.user._id;
  Favorite.find({ users: userId })
    .populate("recipes")
    .then(fav => {
      let recipes = [];
      fav.forEach(e => {
        recipes.push(e.recipes);
      });
      res.render("logged/allplatos", { recipes });
    });
});

router.get("/recipe/:id", isLoggedIn("/"), (req, res, next) => {
  const { id } = req.params;
  Recipe.findById(id).then(recipe => {
    res.render("logged/recipedetail", { recipe });
  });
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
  res.render("logged/getrecipes");
});

router.get("/standarize/:id", isLoggedIn("/"), (req, res, next) => {
  const id = req.params.id;
  Favorite.findById(id)
    .populate("recipes")
    .then(fav => {
      const recipe = fav.recipes;
      res.render("logged/standarize", { recipe });
    });
});

router.get("/newmenu", isLoggedIn("/"), (req, res, next) => {
  Favorite.find()
    .populate("recipes")
    .then(favorites => {
      const recipes = [];
      favorites.forEach(e => recipes.push(e.recipes));
      res.render("logged/newmenu", { recipes });
    });
});

router.get("/seemenus", isLoggedIn("/"), (req, res, next) => {
  Menu.find().then(menu => {
    res.render("logged/seemenus", { menu });
  });
});

router.get("/seemenus/:id", isLoggedIn("/"), (req, res, next) => {
  const { id } = req.params;
  Menu.findById(id)
    .populate("favorites")
    .then(menu => {
      let recids = [];
      menu.favorites.forEach(e => recids.push(e.recipes));
      console.log(recids);
      Recipe.find({ _id: recids }).then(recipes => {
        console.log(recipes);
        res.render("logged/menu", { recipes, name: menu.name, id });
      });
    });
});

router.get("/charts/:id", isLoggedIn("/"), (req, res, next) => {
  const { id } = req.params;
  Menu.findById(id).then(men => {
    const menuid = men.favorites;
    Favorite.find({ _id: menuid })
      .populate("ingredientList")
      .then(fav => {
        let ing = [];
        fav.forEach(obj => {
          if (obj.ingredientList) {
            obj.ingredientList.ingredient.forEach(e => ing.push(e));
          }
        });
        const rep = [];
        console.log(ing);
        for (let i = 0; i < ing.length; i++) {
          var coincidence = 1;
          for (let y = i + 1; y < ing.length; y++) {
            if (ing[i] + "" == ing[y] + "") {
              if (ing[i] != undefined) {
                console.log("coincide!");
                coincidence++;
                rep.push({ ing: ing[y], coincidence });
                delete ing[y];
              }
            }
          }
        }
        Ingredients.find({ _id: ing }).then(menu => {
          menu.forEach(a => {
            rep.forEach(e => {
              if (a._id + "" == e.ing + "") {
                console.log(a.name + "");
                if (a.name.indexOf(" x ") != -1) {
                  var split = a.name.split(" x ");
                  console.log(split);
                  a.name = e.coincidence + " x " + split[1];
                } else {
                  a.name = e.coincidence + " x " + a.name;
                }
              }
            });
          });

          res.render("logged/chart", { menu, name: men.name });
        });
      });
  });
});

router.post(
  "/newmeal",
  [isLoggedIn("/"), uploadCloud.single("photo")],
  (req, res, next) => {
    const { name, ingredient } = req.body;
    Recipe.findOne({ name }).then(recipe => {
      const { tips } = req.body;
      if (recipe == null) {
        let imgPath;
        if (req.file) {
          imgPath = req.file.url;
        } else {
          imgPath =
            "http://happyhormonesforlife.com/wp-content/uploads/2014/05/Grandma-cooking.jpg";
        }
        Recipe.create({ name, imgPath, tips: [tips] }).then(recipe => {
          console.log(recipe);
          const _id = req.user._id;
          const recipeId = recipe._id;
          Favorite.create({ users: _id, recipes: recipeId }).then(fav => {
            const favorite = fav._id;
            res.redirect(`/logged/newmeal/${favorite}`);
          });
        });
      } else {
        res.render("logged/crearplato", { message: "Name already taken" });
      }
    });
  }
);

router.post(
  "/newingredient",
  [isLoggedIn("/"), uploadCloud.single("photo")],
  (req, res, next) => {
    let imgPath;
    if (req.file) {
      imgPath = req.file.url;
    } else {
      imgPath =
        " http://happyhormonesforlife.com/wp-content/uploads/2014/05/Grandma-cooking.jpg";
    }
    let { name } = req.body;
    name = name[0].toUpperCase() + name.substring(1)
    console.log(name)
    Ingredients.findOne({ name }).then(ing => {
      if (ing == null) {
        Ingredients.create({ name, imgPath });
      }
    });
  }
);

router.post("/getIngredients", isLoggedIn("/"), (req, res, next) => {
  Ingredients.find().then(ing => {
    const search = req.body.input;
    let array1 = [];
    ing.forEach(e => {
      array1.push(e.name);
    });
    const match = stringSimilarity.findBestMatch(search, array1);
    let matches = [];
    match.ratings.forEach(e => {
      if (e.rating > 0.3) {
        matches.push(e.target);
      }
    });
    let final = [];
    matches.forEach(e => {
      ing.forEach(b => {
        if (e == b.name) {
          final.push(b);
        }
      });
    });
    console.log(final);
    res.send({ final });
  });
});

router.post("/addmeal", isLoggedIn("/"), (req, res, next) => {
  const { name, imgPath, ingredients } = req.body;
  Recipe.findOne({ name }).then(recipe => {
    if (recipe == null) {
      Recipe.create({ name, imgPath, tips: ingredients }).then(recipes => {
        console.log("recipe added");
        const _id = req.user._id;
        const recipeId = recipes._id;
        Favorite.create({ users: _id, recipes: recipeId }).then(e =>
          res.send(e._id)
        );
      });
    } else {
      const _id = req.user._id;
      const recipeId = recipe._id;
      Favorite.create({ users: _id, recipes: recipeId }).then(e =>
        res.send(e._id)
      );
    }
  });
});

router.post("/recipeRemove", isLoggedIn("/"), (req, res, next) => {
  const { name } = req.body;
  const { _id } = req.user;
  Recipe.findOne({ name }).then(recipe => {
    const id = recipe._id;
    Favorite.findOneAndDelete({ users: _id, recipes: id }).then(e =>
      console.log(e)
    );
  });
});

router.post("/newmeal/:id", isLoggedIn("/"), (req, res, next) => {
  const { id } = req.params;
  const ingredient = req.body.ingredientarr;
  console.log("aqui estoy");
  Ingredients.find({ name: ingredient }).then(ing => {
    let ingredientIds = [];
    ing.forEach(e => {
      ingredientIds.push(e._id);
    });
    Favorite.findById(id).then(fav => {
      IngredientsList.findOne({ favorite: fav._id }).then(inglist => {
        if (inglist == null) {
          console.log("null");
          IngredientsList.create({
            favorite: fav._id,
            ingredient: ingredientIds
          }).then(e => {
            console.log(e);
            Favorite.findOneAndUpdate(
              { _id: fav._id },
              { ingredientList: e._id }
            ).then(e => {
              console.log("done", e);
              res.send(e);
            });
          });
        } else {
          console.log("else");
          console.log(ingredientIds);
          IngredientsList.findOneAndUpdate(
            { favorite: fav._id },
            { ingredient: ingredientIds }
          ).then(list => {
            console.log(list);
            Favorite.findOneAndUpdate(id, { ingredientList: list._id })
              .populate("ingredientList")
              .then(e => {
                console.log("done", e);
                res.send(e);
              });
          });
        }
      });
    });
  });
});

router.post("/newmenu", isLoggedIn("/"), (req, res, next) => {
  let { menu, name } = req.body;
  const user = req.user._id;
  if (name == "") {
    name = `${req.user.username} menu`;
  }
  console.log(menu, name);
  Recipe.find({ name: menu }).then(rec => {
    let recipesId = [];
    rec.forEach(e => recipesId.push(e._id));
    Favorite.find({ recipes: recipesId }).then(fav => {
      let favorites = [];
      fav.forEach(e => favorites.push(e._id));
      Menu.create({ user, favorites, name }).then(menu => {
        res.send(menu._id);
      });
    });
  });
});

router.post("/menuremove", isLoggedIn("/"), (req, res, next) => {
  const { id } = req.body;
  Menu.findByIdAndDelete(id).then(() => res.send(""));
});

router.post("/recipemenuremove/:id", isLoggedIn("/"), (req, res, next) => {
  const { id } = req.body;
  const menuid = req.params.id;
  Menu.findById(menuid)
    .populate("favorites")
    .then(menu => {
      let fav;
      menu.favorites.forEach(e => {
        console.log(e);
        if (e.recipes == id) {
          fav = e._id;
        }
      });
      Menu.findByIdAndUpdate(menuid, { $pull: { favorites: fav } }).then(() => {
        console.log("done");
        res.send("");
      });
    });
});
module.exports = router;
