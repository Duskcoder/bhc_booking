const BookingModel = require("../model/bookingModel");
const CustomError = require("../utils/customError");

class Booking {
  createBooking = async (req, res, next) => {
    try {
      const data = await BookingModel.create(req.body);

      res.status(201).json({ data });
    } catch (error) {
      next(new CustomError("Something went wrong", 500));
    }
  };

  getAllBooking = async (req, res, next) => {
    try {
      const data = await BookingModel.find().sort({
        updatedAt: -1,
        createdAt: -1,
      });
      res.status(200).json({ data });
    } catch (error) {
      next(new CustomError("Something went wrong", 500));
    }
  };
}

module.exports = Booking;
