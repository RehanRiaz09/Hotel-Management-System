const mongoose = require("mongoose");
const reservationSchema = mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: "Guest", require: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", require: true },
  checkInDate: { type: Date, require: true },
  checkoutDate: { type: Date, require: true },
  status: { type: String, require: true },
});
module.exports = mongoose.model("Reservation", reservationSchema);
