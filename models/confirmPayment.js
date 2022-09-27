const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConfirmSchema = new Schema({
  userid: String,
  username: String,
  ordernumber: String,
  packagename: String,
  lifetime: String,
  paymethod: String,
  amount: String,
  date: String,
  time: String,
  image: String,
  confirmDate: {
    type: Date,
    default: new Date(),
  },
  status: String,
});

const confirmPayment = mongoose.model("Confirm", ConfirmSchema);

module.exports = confirmPayment;
