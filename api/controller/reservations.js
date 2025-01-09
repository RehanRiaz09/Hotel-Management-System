const reservation = require("../model/reservation");
const Reservation = require("../model/reservation");
const getAllReservation = async (req, res, next) => {
  try {
    const docs = await Reservation.find()
      .populate("guest room")
      .select("guest room checkInDate checkoutDate status");
    res.status(200).json({
      count: docs.length,
      Reservation: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createReservation = async (req, res, next) => {
  try {
    const reservation = new Reservation({
      guest: req.body.guest,
      room: req.body.room,
      checkInDate: req.body.checkInDate,
      checkoutDate: req.body.checkoutDate,
      status: req.body.status,
    });
    const result = await reservation.save();
    console.log(result);
    res.status(200).json({
      message: "Create Reservation Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getReservationById = async (req, res, next) => {
  try {
    const id = req.params.reservationId;
    const doc = await Reservation.findById(id)
      .populate("guest room")
      .select("guest room checkInDate checkoutDate status");
    console.log(doc);
    if (doc) {
      res.status(200).json({
        reservation: doc,
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
const updateReservation = async (req, res, next) => {
  try {
    const id = req.params.reservationId;
    Reservation.updateOne(
      { _id: id },
      {
        $set: {
          guest: req.body.guest,
          room: req.body.room,
          checkInDate: req.body.checkInDate,
          checkoutDate: req.body.checkoutDate,
          status: req.body.status,
        },
      }
    );
    res.status(200).json({
      message: "Reservation Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteReservation = async (req, res, next) => {
  try {
    const id = req.params.reservationId;
    const result = await Reservation.deleteOne({ id: id });
    res.status(200).json({
      message: "Reservation Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllReservation,
  createReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
};
