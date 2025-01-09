const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Bill = require("../model/bill");
const {
  getAllBill,
  createBill,
  getBillById,
  updateBill,
  deleteBill,
} = require("../controller/bills");
routes.get("/", getAllBill);
routes.post("/", createBill);
routes.get("/:billId", getBillById);
routes.patch("/:billId", updateBill);
routes.delete("/:billId", deleteBill);
module.exports = routes;
