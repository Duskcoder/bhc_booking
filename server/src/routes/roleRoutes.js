    const  RoleRoutes = require("../controller/roleController")
   const router = require("express").Router()
   const {createRole,getRole} = new RoleRoutes()

   router.route("/role-create").post(createRole)
   router.route("/role-get").get(getRole)


   module.exports = router;

    