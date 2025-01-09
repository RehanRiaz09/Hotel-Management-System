const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const guestRouter = require("./api/routes/guests");
const roomRouter = require("./api/routes/rooms");
const billRouter = require("./api/routes/bills");
const inventoryRouter = require("./api/routes/inventorys");
const staffRouter = require("./api/routes/staffs");
const reservationRouter = require("./api/routes/reservations");

mongoose.connect("mongodb://127.0.0.1:27017/hoteldb");
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use("/guest", guestRouter);
app.use("/room", roomRouter);
app.use("/bill", billRouter);
app.use("/inventory", inventoryRouter);
app.use("/staff", staffRouter);
app.use("/reservation", reservationRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;