const userData = require("../models/userData");
const packageData = require("../models/packageData");
const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  const allusers = await userData.find({}).count();
  const alladmin = await userData.find({ position: "Admin" }).count();
  const alluserslist = await userData.find({});
  const allpackage = await packageData.find({}).count();
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  const totalpaidpackages = await packageData.find({ payment: "Paid" }).count();
  const totalpackagesrejected = await packageData
    .find({ payment: "Rejected" })
    .count();
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const paymentpending = await confirmPaymentData
    .find({ status: "Pending" })
    .count();
  const receivedpayment = await confirmPaymentData
    .find({ status: "Received" })
    .count();
  if (req.session.userId && req.session.userPosition == "Admin") {
    return res.render("adminDash", {
      allusers,
      alladmin,
      alluserslist,
      allpackage,
      allwaitingpackage,
      totalpaidpackages,
      totalpackagesrejected,
      FirstName,
      userPosition,
      paymentpending,
      receivedpayment,
    });
  }
  res.redirect("/auth/login");
};
