const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["hold", "rejected", "approved"],
    default:"hold"
  },
  message: {
    type: String,
  },
}, {
  timestamps: true,
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = Maintenance;
