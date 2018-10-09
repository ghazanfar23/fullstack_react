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

  // logout handler
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // current user handler
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
