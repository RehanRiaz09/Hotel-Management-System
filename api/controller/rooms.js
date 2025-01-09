const Room = require("../model/room");
const getAllRoom = async (req, res, next) => {
  try {
    const docs = await Room.find().select(
      "roomNo roomType availability price features"
    );
    res.status(200).json({
      count: docs.length,
      Room: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createRoom = async (req, res, next) => {
  try {
    const room = new Room({
      roomNo: req.body.roomNo,
      roomType: req.body.roomType,
      availability: req.body.availability,
      price: req.body.price,
      features: req.body.features,
    });
    const result = await room.save();
    console.log(result);
    res.status(200).json({
      message: "Create Room Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getRoomById = async (req, res, next) => {
  try {
    const id = req.params.roomId;
    const doc = await Room.findById(id).select(
      "roomNo roomType availability price features"
    );
    console.log(doc);
    if (doc) {
      res.status(200).json({
        room: doc,
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
const updateRoom = async (req, res, next) => {
  try {
    const id = req.params.roomId;
    Room.updateOne(
      { _id: id },
      {
        $set: {
          roomNo: req.body.roomNo,
          roomType: req.body.roomType,
          availability: req.body.availability,
          price: req.body.price,
          features: req.body.features,
        },
      }
    );
    res.status(200).json({
      message: "Room Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteRoom = async (req, res, next) => {
  try {
    const id = req.params.roomId;
    const result = await Room.deleteOne({ id: id });
    res.status(200).json({
      message: "Room Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllRoom,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
};
