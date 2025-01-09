const Bill = require("../model/bill");
const getAllBill = async (req, res, next) => {
  try {
    const docs = await Bill.find()
      .populate("patient")
      .select("patient servicesRendered medications totalCost status");
    res.status(200).json({
      count: docs.length,
      Bill: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createBill = async (req, res, next) => {
  try {
    const bill = new Bill({
      patient: req.body.patient,
      servicesRendered: req.body.servicesRendered,
      medications: req.body.medications,
      totalCost: req.body.totalCost,
      status: req.body.status,
    });
    const result = await bill.save();
    console.log(result);
    res.status(200).json({
      message: "Create Bill Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getBillById = async (req, res, next) => {
  try {
    const id = req.params.billId;
    const doc = await Bill.findById(id)
      .populate("patient")
      .select("patient servicesRendered medications totalCost status");
    console.log(doc);
    if (doc) {
      res.status(200).json({
        bill: doc,
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
const updateBill = async (req, res, next) => {
  try {
    const id = req.params.billId;
    Bill.updateOne(
      { _id: id },
      {
        $set: {
          patient: req.body.patient,
          servicesRendered: req.body.servicesRendered,
          medications: req.body.medications,
          totalCost: req.body.totalCost,
          status: req.body.status,
        },
      }
    );
    res.status(200).json({
      message: "Bill Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteBill = async (req, res, next) => {
  try {
    const id = req.params.billId;
    const result = await Bill.deleteOne({ id: id });
    res.status(200).json({
      message: "Bill Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllBill,
  createBill,
  getBillById,
  updateBill,
  deleteBill,
};
