const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Propertier",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  companyName: {
    type: String,
    required: true,
  },
  registerNumber: {
    type: String,
    required: true,
  },
  postalAddress: {
    type: String,
    required: true,
  },
  physicalAddress: {
    type: String,
  },
  telephone: {
    type: String,
    required: true,
  },
  cellphone: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "success"],
    default: "pending",
  },
  email: String,
  financingDetails: String,
  maximumLoan: String,
  selfFinaning: String,
  plotNoRented: String,
  plotNoPurchased: String,
  houseType: String,
  reprensentative: String,
  reprensentativeSignature: { type: String, required: true },
  companyStamp: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
