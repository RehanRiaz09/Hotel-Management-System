const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Reservation = require("../model/reservation");
const {
  getAllReservation,
  createReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
} = require("../controller/reservations");
routes.get("/", getAllReservation);
routes.post("/", createReservation);
routes.get("/:reservationId", getReservationById);
routes.patch("/:reservationId", updateReservation);
routes.delete("/:reservationId", deleteReservation);
module.exports = routes;
