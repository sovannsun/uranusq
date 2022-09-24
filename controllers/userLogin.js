const bcrypt = require("bcrypt");
const userData = require("../models/userData");

module.exports = (req, res) => {
  const { email, password } = req.body;
  userData.findOne({ email: email }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          req.session.userId = user._id;
          req.session.userTypeOf = user.typeof;
          req.session.userPosition = user.position;
          req.session.userFirsName = user.firstname;
          req.session.userLastName = user.lastname;
          req.session.userUsername = user.username;
          req.session.userEmail = user.email;
          req.session.userPhone = user.phone;
          req.session.userLineID = user.lineid;
          req.session.userRaCryptoPairs = user.raptercryptopairs;
          req.session.userRapterapikey = user.rapterapikey;
          req.session.userRaptersecretkey = user.raptersecretkey;
          req.session.userHyCryptoPairs = user.raptercryptopairs;
          req.session.userHydraapikey = user.hydraapikey;
          req.session.userHydrasecretkey = user.hydrasecretkey;
          req.session.userStatus = user.status;
          res.redirect("/user/dashboard");
        } else {
          res.redirect("/auth/login");
        }
      });
    } else {
      res.redirect("/auth/login");
    }
  });
};
