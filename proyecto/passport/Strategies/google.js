require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_LOG_ID,
      clientSecret: process.env.GOOGLE_LOG_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ google_Id: profile.id })
        .then(user => {
          console.log(user);
          if (user != null) {
            return done(null, user);
          }
          User.create({
            google_Id: profile.id,
            username: profile.displayName,
            active: true
          }).then(user => {
            console.log(user);
            return done(null, user);
          });
        })
        .catch(e => console.log(e));
    }
  )
);
