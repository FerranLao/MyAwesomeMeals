const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");
const backCheck = require("../public/javascripts/backcheck");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    (username, password, done) => {
      if (!backCheck(username, "name") || !backCheck(password, "password")) {
        res.render("auth/signup", { message: "Loggin cant be done" });
        return;
      }
      User.findOne({ username })
        .then(foundUser => {
          if (!foundUser) {
            done(null, false, { message: "Incorrect username" });
            return;
          }

          if (!bcrypt.compareSync(password, foundUser.password)) {
            done(null, false, { message: "Incorrect password" });
            return;
          }

          done(null, foundUser);
        })
        .catch(err => done(err));
    }
  )
);
