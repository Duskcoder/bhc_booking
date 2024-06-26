const CustomError = require("../utils/customError");

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal server Error";

  if (error.message === "CastError") {
    const message = `Resources not found with this id.. Invalid ${error.path}`;
    error = new CustomError(message, 400);
  }

  if (error.code === 11000) {
    const message = `Duplicate key ${Object.keys(error.keyValue)} Entered`;
    error = new CustomError(message, 400);
  }

  if (error.name === "JsonWebTokenError") {
    const message = `your url is invalid please try again later`;
    error = new CustomError(message, 400);
  }

  res.status(error.statusCode).json({ success: false, message: error.message });
};
