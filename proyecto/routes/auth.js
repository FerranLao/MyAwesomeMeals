const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const { sendMail, recoveryMail } = require("../email/sendmail");
const { isLoggedIn } = require("../middlewares/IsLogged");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const backCheck = require("../middlewares/backcheck");
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
  console.log(req.user);
  const user = req.user;
  res.render("auth/useredit", { user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/recover", (req, res) => {
  res.render("auth/recover");
});

router.get("/recover/:id", recaptcha.middleware.render, (req, res, next) => {
  console.log(req.params.id);
  const id = req.params.id;
  if (id === "") {
    return res.redirect("/");
  }
  res.render("auth/recoverpass", { id });
});
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => res.redirect("/logged/main")
);

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

  if (
    !backCheck(username, "name") ||
    !backCheck(password, "password") ||
    !backCheck(email, "email") ||
    !backCheck(phone, "phone")
  ) {
    res.render("auth/signup", { message: "Acces not allowed" });
    return;
  }

  if (!req.recaptcha.error) {
    User.findOne(
      { $or: [{ username }, { email }] },
      "username",
      (err, user) => {
        if (user !== null) {
          res.render("auth/signup", {
            message: "The username already exists or email in already in use"
          });
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
      }
    );
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
  if (
    !backCheck(username, "name") ||
    !backCheck(email, "email") ||
    !backCheck(phone, "phone")
  ) {
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
router.post("/recover", (req, res, next) => {
  const { email } = req.body;

  if (email == "") {
    res.render("auth/recover", { message: "Insert your email" });
  }
  User.findOne({ email }).then(u => {
    if (u != null) {
      const characters =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let confirmationCode = "";
      for (let i = 0; i < 25; i++) {
        confirmationCode +=
          characters[Math.floor(Math.random() * characters.length)];
      }
      User.findOneAndUpdate(
        { username: u.username },
        { recovery: confirmationCode }
      )
        .then(user => {
          recoveryMail(user.email, confirmationCode).then(() => {
            res.redirect("/auth/login");
          });
        })
        .catch(e => console.log("Error", e));
    } else {
      res.render("auth/recover", { message: "Email not found" });
    }
  });
});

router.post("/recover/:id", recaptcha.middleware.verify, (req, res, next) => {
  const { password } = req.body;
  const { id } = req.params;
  if (!req.recaptcha.error) {
    if (password == "") {
      return res.render("auth/recoverpass", { message: "Insert password" });
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    User.findOneAndUpdate(
      { recovery: id },
      { recovery: "", password: hashPass }
    ).then(() => res.redirect("/auth/login"));
  } else {
    res.render("auth/recoverpass", { message: "captcha failed" });
  }
});

module.exports = router;
