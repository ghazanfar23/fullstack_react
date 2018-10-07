const passport = require("passport");

module.exports = app => {
  // route handler
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // callback route handle
  app.get("/auth/google/callback", passport.authenticate("google"));
};
