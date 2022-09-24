const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
let uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  typeof: String,
  position: String,
  firstname: String,
  lastname: String,
  username: {
    type: String,
    unique: true,
    required: [true, "Please! enter username"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please! enter email"],
  },
  phone: String,
  lineid: String,
  password: String,
  raptercryptopairs: String,
  rapterapikey: String,
  raptersecretkey: String,
  hydracryptopairs: String,
  hydraapikey: String,
  hydrasecretkey: String,
  status: String,
});

userSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const userData = mongoose.model("User", userSchema);

module.exports = userData;
