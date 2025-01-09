const mongoose = require("mongoose");
const staffSchema = mongoose.Schema({
  name: { type: String, require: true },
  IsMale: { type: Boolean, default: true },
  phone: { type: String, require: true },
  address: { type: String },
  position: { type: String, require: true },
  shift: { type: String, require: true},
  salary: { type: String, require: true },
});
module.exports = mongoose.model("Staff", staffSchema);
