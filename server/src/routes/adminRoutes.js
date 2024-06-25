const router = require("express").Router();
const adminController = require("../controller/adminController");
const { createAdmin, LoginAdmin ,adminProfile} = new adminController();
const {isAuthenticate,restrict}=require("../middleware/auth")

router.route("/admin/signup").post(createAdmin);
router.route("/admin/login").post(LoginAdmin);
router.route("/admin/getOne").get(isAuthenticate,adminProfile);



module.exports = router;
