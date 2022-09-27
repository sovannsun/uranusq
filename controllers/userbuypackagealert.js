module.exports = (req, res) => {
  const UId = req.session.userId;
  if (req.session.userId) {
    return res.render("userbuypackagealert", { UId });
  }
  res.redirect("/auth/login");
};
