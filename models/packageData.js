const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  typeof: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  package: String,
  packagelife: String,
  payment: String,
  startDate: {
    type: Date,
    default: new Date(),
  },
  expireDate: String,
  status: String,
});

const packageData = mongoose.model("Package", packageSchema);

module.exports = packageData;
