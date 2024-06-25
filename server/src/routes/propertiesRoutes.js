const route = require("express").Router();
const propertieController = require("../controller/propertieController");
const {
  createPropertier,
  getOneProduct,
  getProduct,
  uploadImageUpdate,
  patchProduct,
  deleteOnlyImage,
  deleteProduct,
} = new propertieController();
const { isAuthenticate, restrict } = require("../middleware/auth");
const multer=require("../utils/Multer")
route
  .route("/create-product")
  .post(
    multer.array("images", 4),
    isAuthenticate,
    restrict("admin"),
    createPropertier
  );
route.route("/get-product").get(isAuthenticate, restrict("admin"), getProduct);
route
  .route("/get-one-product/:id")
  .get(isAuthenticate, restrict("admin"), getOneProduct);

route
  .route("/patch-product/:id")
  .patch(isAuthenticate, restrict("admin"), patchProduct);
route
  .route("/delete-product/:id")
  .delete(isAuthenticate, restrict("admin"), deleteProduct);
route
  .route("/deleteImage")
  .post(isAuthenticate, restrict("admin"), deleteOnlyImage);
route
  .route("/uploadImageUpdate/:id")
  .patch(
    multer.array("images", 4),
    isAuthenticate,
    restrict("admin"),
    uploadImageUpdate
  );

module.exports = route;
