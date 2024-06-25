const router=require("express").Router()
const userController=require("../controller/userController")
const {createUser,loginUser}=new userController()


router.route("/signup").post(createUser)
router.route("/login").post(loginUser)





module.exports=router