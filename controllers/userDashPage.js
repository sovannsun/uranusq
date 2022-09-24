const packageData = require("../models/packageData");
const logger = require("../config/logger");

module.exports = async (req, res) => {
  const UId = req.session.userId;
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  if (req.session.userId) {
    logger.info(req.session.userUsername);
    return res.render("userdash", {
      UId,
      FirstName,
      userPosition,
      allwaitingpackage,
    });
  }
  res.redirect("/auth/login");
};
