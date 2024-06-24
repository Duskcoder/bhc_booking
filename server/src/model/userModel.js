const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchmea = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],

    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchmea.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 14);
  next();
});

userSchmea.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchmea);
