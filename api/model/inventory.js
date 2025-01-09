const mongoose = require("mongoose");
const inventorySchema = mongoose.Schema({
  name: { type: String, require: true },
  quantity: { type: Number, require: true },
  description: { type: String },
  supplierName: { type: String, require: true },
  supplierContact: { type: String, require: true },
  price: { type: String, require: true },
});
module.exports = mongoose.model("Inventory", inventorySchema);
