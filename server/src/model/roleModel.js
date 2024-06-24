const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    role: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

roleSchema.pre(/^find/, function (next) {
  this.find({ isActive: { $ne: false } });
  next();
});

module.exports = mongoose.model("Role", roleSchema);
