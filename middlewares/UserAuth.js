const passport = require("passport");
const passportJWT = require("passport-jwt");
const path = require("path");
const config = require(path.join(__dirname, "../src/core/config"));
const userController = require(path.join(__dirname, "../controllers/UserController"));

const options = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: config.jwtSecretKey,
}

passport.use("user", new passportJWT.Strategy(options, async (payload, done) => {
  const user = await userController.findById(payload.id);
  return (user) ? done(null, user) : done(null, false);
}));

module.exports = passport.authenticate('user', {session: false});