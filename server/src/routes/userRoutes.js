const router=require("express").Router()
const userController=require("../controller/userController")
const {createUser,loginUser,getUser}=new userController()
const {isAuthendicated} = require("../middleware/auth")

router.route("/signup").post(createUser)
router.route("/login").post(loginUser)
router.route("/").get(isAuthendicated,getUser)




module.exports=router