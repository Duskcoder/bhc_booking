const router = require("express").Router();
const adminController = require("../controller/adminController");
const {
  createAdmin,
  LoginAdmin,
  adminProfile,
  forgetPassword,
  resetPassword,
  adminGetUsers,
  updateMe,
  updatePasswordByShopLogin
} = new adminController();
const { isAuthenticate, restrict } = require("../middleware/auth");

router.route("/admin/signup").post(createAdmin);
router.route("/admin/login").post(LoginAdmin);
router.route("/admin/forget").post(forgetPassword);
router.route("/admin-password/:token").patch(resetPassword);

router
  .route("/admin/getOne")
  .get(isAuthenticate, restrict("admin"), adminProfile);

router
  .route("/admin-user")
  .get(isAuthenticate, restrict("admin"), adminGetUsers);

router
  .route("/update-profile")
  .patch(isAuthenticate, restrict("admin"), updateMe);

  router
  .route("/update-password")
  .patch(
    isAuthenticate,
    restrict("admin"),
    updatePasswordByShopLogin
  );

module.exports = router;
