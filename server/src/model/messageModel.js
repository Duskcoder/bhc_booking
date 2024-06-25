const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    converSationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    images: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Messages", messageSchema);
