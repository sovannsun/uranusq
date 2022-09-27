const confirmPaymentData = require("../models/confirmPayment");

module.exports = (req, res) => {
  confirmPaymentData.updateOne(req.body, (error, user) => {
    if (error) {
      return res.redirect("/admin/dashboard");
    }
    res.redirect("/admin/dashboard");
  });
};
