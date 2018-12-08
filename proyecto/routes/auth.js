const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const sendMail = require("../email/sendmail");
const { isLoggedIn } = require("../middlewares/IsLogged");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const backCheck = require("../public/javascripts/backcheck");
var Recaptcha = require("express-recaptcha").Recaptcha;
var recaptcha = new Recaptcha(
  process.env.CAPCHA_KEY,
  process.env.CAPCHA_Secret
);

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.get("/signup", recaptcha.middleware.render, (req, res, next) => {
  res.render("auth/signup");
});

router.get("/editprofile", isLoggedIn("/"), (req, res, next) => {
  const user = req.user;
  res.render("auth/useredit", { user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findOneAndUpdate({ _id: id }, { active: true }).then(() => {
    res.redirect("/");
  });
});

router.post("/signup", recaptcha.middleware.verify, (req, res, next) => {
  const { username, password, email, phone } = req.body;
  if (username === "" || password === "" || email === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }
  console.log("continua")
  if ( !backCheck(username ,"name") || !backCheck(password, "password") || !backCheck(email, "email")|| !backCheck (phone,"phone")) {
    console.log("no pasa")
    res.render("auth/signup", { message: "Acces not allowed" });
    return;
  }
  console.log("pasa")
  if (!req.recaptcha.error) {
    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.render("auth/signup", { message: "The username already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        password: hashPass,
        email,
        phone
      });

      newUser
        .save()
        .then(user => {
          sendMail(user.email, user._id).then(() => {
            res.redirect("/");
          });
        })
        .catch(err => {
          res.render("auth/signup", { message: "Something went wrong" });
        });
    });
  } else {
    res.render(res.render("auth/signup", { message: "Invalid reCaptcha" }));
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/logged/main",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.post("/editprofile", isLoggedIn("/"), (req, res, next) => {
  const { username, password, email, phone } = req.body;
  let edited = { username, email, phone };
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  if (password != "") {
    edited.password = hashPass;
  }
  if ( !backCheck(username ,"name") || !backCheck(password, "password") || !backCheck(email, "email")|| !backCheck (phone,"phone")) {
    res.render("auth/signup", { message: "Acces not allowed" });
    return;
  }
  User.findOne({ username }).then(user => {
    if (user == null || user.username == req.user.username) {
      User.findOneAndUpdate({ username: req.user.username }, edited)
        .then(user => {
          req.user = user;
          res.redirect("/logged/main");
        })
        .catch(e => console.log("Error", e));
    } else {
      res.render("auth/useredit", { message: "User name already taken" });
    }
  });
});

module.exports = router;