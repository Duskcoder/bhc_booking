const router = require("express").Router();
const adminController = require("../controller/adminController");
const { createAdmin, LoginAdmin } = new adminController();


router.route("/admin/signup").post(createAdmin);
router.route("/admin/login").post(LoginAdmin);



module.exports = router;
