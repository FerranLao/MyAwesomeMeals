const passport = require('passport');

require('./serializers');
require('./Strategies/localStrategy');
require("./Strategies/google")

module.exports = (app)  => {
  app.use(passport.initialize());
  app.use(passport.session());
}
