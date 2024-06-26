const BookingModel = require("../model/bookingModel");
const CustomError = require("../utils/customError");

class BookingController {
  createBooking = async (req, res, next) => {
    try {
      let representativeSignature;
      let companyStamp;

      if (req.files) {
        if (req.files.representativeSignature) {
          representativeSignature = req.files.representativeSignature[0].filename;
        }
        if (req.files.companyStamp) {
          companyStamp = req.files.companyStamp[0].filename;
        }
      }

      const data = await BookingModel.create({
        ...req.body,
        representativeSignature: representativeSignature,
        companyStamp: companyStamp,
      });

      res.status(201).json({ data });
    } catch (error) {
      next(new CustomError(error.message, 500));
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

module.exports = BookingController;
