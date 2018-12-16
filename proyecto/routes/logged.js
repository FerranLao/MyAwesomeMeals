const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");
const User = require("../models/User");
const Favorite = require("../models/Favoritos");
const Ingredients = require("../models/Ingredients");
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
      console.log(recipes)
      res.render("logged/allplatos", { recipes });
    });
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
        let imgPath;
        if (req.file) {
          imgPath = req.file.url;
        } else {
          imgPath =
            "http://res.cloudinary.com/aaronreina/image/upload/v1543767688/MyAwesomeMeals/my-file-name.jpg";
        }
        Recipe.create({ name, imgPath }).then(recipe => {
          const _id = req.user._id;
          const recipeId = recipe._id;
          Favorite.create({ users: _id, recipes: recipeId }).then(fav => {
            const favorite = fav._id;
            IngredientsList.create({ favorite, ingredient: [] }).then(() =>
              res.redirect(`/logged/newmeal/${favorite}`)
            );
          });
        });
      } else {
        res.render("logged/crearplato", { message: "Name already taken" });
      }
    });
  }
);

//post axios
router.post("/getIngredients", isLoggedIn("/"), (req, res, next) => {
  Ingredients.find().then(ing => {
    const search = req.body.input
    let array1 = []
    ing.forEach(e=>{
      array1.push(e.name)
    })
    const match= stringSimilarity.findBestMatch(search,array1)
    let matches = []
    match.ratings.forEach(e=>{
      console.log(e)
        if (e.rating > 0.3) {
          matches.push(e.target);
        }
     })
     let final=[]
     matches.forEach(e=>{
       ing.forEach(b=>{
         if(e==b.name){
           final.push(b)
         }
       })
     })
     console.log(final)
    res.send({ final });
  });
});

router.post("/addmeal", isLoggedIn("/"), (req, res, next) => {
  const { name, imgPath, ingredients } = req.body;
  Recipe.findOne({ name }).then(recipe => {
    if (recipe == null) {
      console.log();
      Recipe.create({ name, imgPath, ingredients }).then(recipes => {
        console.log("recipe added");
        const _id = req.user._id;
        const recipeId = recipes._id;
        Favorite.create({ users: _id, recipes: recipeId }).then(e =>
          console.log(e)
        );
      });
    } else {
      const _id = req.user._id;
      const recipeId = recipe._id;
      Favorite.create({ users: _id, recipes: recipeId }).then(e =>
        console.log(e)
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

router.post("/addingredient", isLoggedIn("/"), (req, res, next) => {
  const { name } = req.body;
  Ingredients.findOne({ name }).then(ing => {
    const { _id } = ing;
    IngredientsList.find({ ingredient: _id });
  }); 
});

router.post("/newmeal/:id",isLoggedIn("/"),(req,res,next)=>{
  const {id}=req.params
  
  const ingredient=req.body.ingredientarr

  Ingredients.find({name:ingredient}).then(ing=>{
    let ingredientIds=[]
    ing.forEach(e=>{
      ingredientIds.push(e._id)
    })
    console.log(ingredientIds)
    Favorite.findById(id).then(fav=>{
      IngredientsList.findOneAndUpdate({favorite:fav._id},{ingredient:ingredientIds}).then(list=>{
        Favorite.findOneAndUpdate(id,{ingredientList:list._id})
        Recipe.findByIdAndUpdate(fav.recipes,{ingredients:ingredient})
      })
    })
    
  })
})

module.exports = router;
