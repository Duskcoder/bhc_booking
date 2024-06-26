const router = require("express").Router();
const BookingController = require("../controller/bookingController");
const { createBooking, getAllBooking } = new BookingController();

const { isAuthenticate, restrict } = require("../middleware/auth");
const multer = require("../utils/Multer");

router.route("/booking-create").post(
  isAuthenticate,

  createBooking
);

router
  .route("/get-booking")
  .get(isAuthenticate, restrict("admin"), getAllBooking);

module.exports = router;
