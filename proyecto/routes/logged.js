const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");
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
    Recipe.find()
    .then(recipes => {
      res.render("logged/allplatos", { recipes });
    })
    .catch(e => console.log("Error", e));
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

router.post(
  "/newmeal",
  [isLoggedIn("/"), uploadCloud.single("photo")],
  (req, res, next) => {
    const { name } = req.body;
    let imgPath;
    if (req.file) {
      imgPath = req.file.url;
    } else {
      imgPath =
        "http://res.cloudinary.com/aaronreina/image/upload/v1543767688/MyAwesomeMeals/my-file-name.jpg";
    }
    Recipe.create({ name, imgPath }).then(() => {
      res.redirect("/");
    });
  }
);
module.exports = router;
