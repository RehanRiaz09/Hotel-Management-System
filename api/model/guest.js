const mongoose = require("mongoose");
const guestSchema = mongoose.Schema({
  name: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String },
  address: { type: String, require: true },
  nationality: { type: String, require: true },
  iDNumber: { type: String, require: true },
  payment: { type: String, require: true },
});
module.exports = mongoose.model("Guest", guestSchema);
