const Inventory = require("../model/inventory");
const getAllInventory = async (req, res, next) => {
  try {
    const docs = await Inventory.find().select(
      "name quantity description supplierName supplierContact price"
    );
    res.status(200).json({
      count: docs.length,
      Inventory: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createInventory = async (req, res, next) => {
  try {
    const inventory = new Inventory({
      name: req.body.name,
      quantity: req.body.quantity,
      description: req.body.description,
      supplierName: req.body.supplierName,
      supplierContact: req.body.supplierContact,
      price: req.body.price,
    });
    const result = await inventory.save();
    console.log(result);
    res.status(200).json({
      message: "Create Inventory Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getInventoryById = async (req, res, next) => {
  try {
    const id = req.params.inventoryId;
    const doc = await Inventory.findById(id).select(
      "name quantity description supplierName supplierContact price"
    );
    console.log(doc);
    if (doc) {
      res.status(200).json({
        inventory: doc,
      });
    } else {
      res.status(404).json({
        message: "No valid entry found for this provide ID",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const updateInventory = async (req, res, next) => {
  try {
    const id = req.params.inventoryId;
    Inventory.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          quantity: req.body.quantity,
          description: req.body.description,
          supplierName: req.body.supplierName,
          supplierContact: req.body.supplierContact,
          price: req.body.price,
        },
      }
    );
    res.status(200).json({
      message: "Inventory Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteInventory = async (req, res, next) => {
  try {
    const id = req.params.inventoryId;
    const result = await Inventory.deleteOne({ id: id });
    res.status(200).json({
      message: "Inventory Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllInventory,
  createInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
