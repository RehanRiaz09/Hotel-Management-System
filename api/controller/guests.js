const Guest = require("../model/guest");
const getAllGuest = async (req, res, next) => {
  try {
    const docs = await Guest.find().select(
      "name phone email address nationality iDNumber payment"
    );

    res.status(200).json({
      count: docs.length,
      Guest: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err || "server error",
    });
  }
};
const createGuest = async (req, res, next) => {
  try {
    const guest = new Guest({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      nationality: req.body.nationality,
      iDNumber: req.body.iDNumber,
      payment: req.body.payment,
    });
    const result = await guest.save();

    console.log(result);
    res.status(201).json({
      message: "create Guest successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getGuestById = async (req, res, next) => {
  {
    try {
      const id = req.params.guestId;
      const doc = await Guest.findById(id).select(
        "name phone email address nationality iDNumber payment"
      );
      console.log(doc);
      if (doc) {
        res.status(200).json({
          guest: doc,
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
  }
};
const updateGuest = async (req, res, next) => {
  {
    try {
      const id = req.params.guestId;
      Guest.updateOne(
        { _id: id },
        {
          $set: {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            nationality: req.body.nationality,
            iDNumber: req.body.iDNumber,
            payment: req.body.payment,
          },
        }
      );

      res.status(200).json({
        message: "Guest update",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
};
const deleteGuest = async (req, res, next) => {
  {
    try {
      const id = req.params.guestId;
      const result = await Guest.deleteOne({ _id: id });

      res.status(200).json({
        message: "Guest Deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
};
module.exports = {
  getAllGuest,
  createGuest,
  getGuestById,
  updateGuest,
  deleteGuest,
};
