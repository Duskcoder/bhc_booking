const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
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
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetTokenExpired: Date,
});

userSchmea.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 14);
  next();
});

userSchmea.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchmea.methods.isPasswordChanged = async function (jwtToken) {
  if (this.passwordChangedAt) {
    const passwordChangedtimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtToken < passwordChangedtimeStamp;
  } else {
    return false;
  }
};

userSchmea.methods.createResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetTokenExpired = Date.now() + 10 * 60 * 100;

  return resetToken;
};

module.exports = mongoose.model("User", userSchmea);
