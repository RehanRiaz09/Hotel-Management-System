const mongoose = require("mongoose");
const billSchema = mongoose.Schema({
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    require: true,
  },
  roomNumber: { type: String, require: true },
  checkInDate: { type: Date, require: true },
  CheckOutDate: { type: String, require: true },
  totalCost: { type: String, require: true },
  servicesAvailed: { type: String, require: true },
  status: { type: String, require: true },
});
module.exports = mongoose.model("Bill", billSchema);
