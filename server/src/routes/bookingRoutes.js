const router = require("express").Router();
const Booking = require("../controller/bookingController");
const { createBooking, getAllBooking } = new Booking();

const { isAuthenticate, restrict } = require("../middleware/auth");

router.route("/booking-create").post(isAuthenticate, createBooking);
router
  .route("/get-booking")
  .get(isAuthenticate, restrict("admin"), getAllBooking);

module.exports = router;
