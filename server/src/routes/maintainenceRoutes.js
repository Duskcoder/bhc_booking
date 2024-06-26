const route = require("express").Router();
const Maintainence = require("../controller/maintainnenceController");
const { isAuthenticate, restrict } = require("../middleware/auth");

const { createMaintainence, getMaintainence, updateMainTainence } =
  new Maintainence();

route
  .route("/post-query")
  .post(isAuthenticate, restrict("user", "admin"), createMaintainence);
route
  .route("/get-query")
  .get(isAuthenticate, restrict("admin"), getMaintainence);

route
  .route("/update-query/:id")
  .patch(isAuthenticate, restrict("admin"), updateMainTainence);

module.exports = route;
