const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Staff = require("../model/staff");
const {
  getAllSatff,
  createStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
} = require("../controller/staffs");
routes.get("/", getAllSatff);
routes.post("/", createStaff);
routes.get("/:staffId", getStaffById);
routes.patch("/:staffId", updateStaff);
routes.delete("/:staffId", deleteStaff);

module.exports = routes;
