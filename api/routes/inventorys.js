const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Inventory = require("../model/inventory");
const {
  getAllInventory,
  createInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
} = require("../controller/inventorys");
routes.get("/", getAllInventory);
routes.post("/", createInventory);
routes.get("/:inventoryId", getInventoryById);
routes.patch("/:inventoryId", updateInventory);
routes.delete("/:inventoryId", deleteInventory);
module.exports = routes;
