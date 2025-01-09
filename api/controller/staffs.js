const Staff = require("../model/staff");
const getAllSatff = async (req, res, next) => {
  try {
    const docs = await Staff.find().select(
      "name IsMale phone address position shift salary"
    );
    res.status(200).json({
      count: docs.length,
      Staff: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createStaff = async (req, res, next) => {
  try {
    const staff = new Staff({
      name: req.body.name,
      IsMale: req.body.IsMale,
      phone: req.body.phone,
      address: req.body.address,
      shift: req.body.shift,
      position: req.body.position,
      salary: req.body.salary,
    });
    const result = await staff.save();
    console.log(result);
    res.status(200).json({
      message: "Create Staff Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getStaffById = async (req, res, next) => {
  try {
    const id = req.params.staffId;
    const doc = await Staff.findById(id).select(
      "name IsMale phone address position shift salary"
    );
    console.log(doc);
    if (doc) {
      res.status(200).json({
        staff: doc,
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
const updateStaff = async (req, res, next) => {
  try {
    const id = req.params.staffId;
    Staff.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          IsMale: req.body.IsMale,
          phone: req.body.phone,
          address: req.body.address,
          shift: req.body.shift,
          position: req.body.position,
          salary: req.body.salary,
        },
      }
    );
    res.status(200).json({
      message: "Staff Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteStaff = async (req, res, next) => {
  try {
    const id = req.params.staffId;
    const result = await Staff.deleteOne({ id: id });
    res.status(200).json({
      message: "Staff Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllSatff,
  createStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
};
