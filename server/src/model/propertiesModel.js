const mongoose = require("mongoose");

const proertiesSchmea = new mongoose.Schema(
  {
    
    propertie_name: {
      type: String,
      required: [true]
    },
    product_price: {
      type: Number,
      required: [true],
    },

    address: {
      type: String,
     required:true
    },
    country: {
      type: String,
    
    },
    option:{
      type: String,
      required:true
    },
    images:{
      type:Array
    },
    active: {
      type: Boolean,
      default:true
    },
  },
  { timestamps: true }
);

proertiesSchmea.pre(/^find/, async function (next) {
  this.find({ active: { $ne: false } });
  next();
});

module.exports = mongoose.model("Propertier", proertiesSchmea);
