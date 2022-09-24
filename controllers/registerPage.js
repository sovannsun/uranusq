module.exports = (req, res) => {
  let firstname = "";
  let lastname = "";
  let username = "";
  let email = "";
  let phone = "";
  let lineid = "";
  let password = "";
  const data = req.flash("data")[0];

  if (typeof data != "undefined") {
    firstname = data.firstname;
    lastname = data.lastname;
    username = data.username;
    email = data.email;
    phone = data.phone;
    lineid = data.lineid;
    password = data.password;
  }

  res.render("register", {
    errors: req.flash("validationErrors"),
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    phone: phone,
    lineid: lineid,
    password: password,
  });
};
