module.exports = (req, res) => {
  const UId = req.session.userId;
  if (req.session.userId) {
    return res.render("userconfirmalert", { UId });
  }
  res.redirect("/auth/login");
};
