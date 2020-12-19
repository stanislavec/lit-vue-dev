/*jslint node: true, nomen: true*/
"use strict";

module.exports = function (express, logger, config) {
  var path = require("path"),
    router = express.Router(),
    usersController = require(path.join(
      "..",
      "controllers",
      "usersController"
    ))(logger, config);

  const templatePath = path.join("..", "templates", "users");

  router.get("/", function (req, res) {
    usersController.getUsers((err, usersList) => {
      if (err) {
        res.status(err.status).json({
          message: err.message,
        });
      } else {
        res.status(200).json(usersList);
      }
    });
  });

  router.get("/:id", function (req, res) {
    const id = req.params.id;
    usersController.getUser(id, function (err, user) {
      if (err) {
        res.status(err.status).json(err);
      } else {
        res.status(200).render(`${templatePath}/index.ejs`, { user });
      }
    });
  });

  return router;
};
