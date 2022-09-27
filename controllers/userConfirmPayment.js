const path = require("path");
const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  let image = req.files.image;
  image.mv(
    path.resolve(__dirname, "..", "public/images", image.name),
    async (error) => {
      await confirmPaymentData.create({
        ...req.body,
        image: "/images/" + image.name,
        userid: req.session.userId,
      });
      res.redirect("/user/confirm/alert");
    }
  );
};
