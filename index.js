const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressSession = require("express-session");
const flash = require("connect-flash");
require("dotenv").config;
const fileUpload = require("express-fileupload");

//Middleware
const authMiddleware = require("./middleware/authMiddleware");
const redirectMiddleware = require("./middleware/redirectMiddleware");

//Home Page Controllers
const homePage = require("./controllers/homePage");

//Admin Dashboard Controllers
const adminDashboardPage = require("./controllers/adminDashPage");
const managementdPage = require("./controllers/managementPage");
const billingPage = require("./controllers/billingPage");
const settingPage = require("./controllers/settingPage");
const adminPage = require("./controllers/adminPage");
const userdetailpage = require("./controllers/userDetailPage");
const packagedetailpage = require("./controllers/packageDetailPage");
const paymentConfirmationPage = require("./controllers/paymentconfirmPage");
const paymentConfirmationdetailPage = require("./controllers/paymentconfirmdetail");

//User Dashboard Controllers
const userDashboardPage = require("./controllers/userDashPage");
const userBotPage = require("./controllers/userBot");
const userPricePage = require("./controllers/userPricePage");
const userProfilePage = require("./controllers/userProfilePage");
const userPackageDetail = require("./controllers/userpackagedetail");

const registerPage = require("./controllers/registerPage");
const userStore = require("./controllers/userStore");
const loginPage = require("./controllers/loginPage");
const userLogin = require("./controllers/userLogin");
const userLogout = require("./controllers/userLogout");
const userPackageStore = require("./controllers/userPackageStore");
const userBotUpdate = require("./controllers/userBotUpdate");
const packagetUpdate = require("./controllers/packageUpdate");
const registerAlertPage = require("./controllers/registerAlertPage");
const userConfirmPayment = require("./controllers/userConfirmPayment");
const userBuyPackageAlert = require("./controllers/userbuypackagealert");
const userConfirmAlert = require("./controllers/userconfirmalert");
const paymentConfirmUpdate = require("./controllers/paymentconfirmupdate");

//Connect to Database
mongoose.connect(
  "mongodb+srv://sovanndev:55557777@cluster0.xp3wr.mongodb.net/UranusQ",
  {
    useNewUrlParser: true,
  }
);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(
  expressSession({
    secret: "UranusQ",
    resave: true,
    saveUninitialized: true,
  })
);

global.AdminButton = null;

app.use("*", (req, res, next) => {
  AdminButton =
    req.session.userId == req.session.userId &&
    req.session.userPosition == "Admin";
  next();
});

global.loggedIn = null;

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

app.use(flash());

//Landing Page Router
app.get("/", homePage);

//Admin Dashboard Router
app.get("/admin/dashboard", adminDashboardPage);
app.get("/admin/management", managementdPage);
app.get("/admin/billing", billingPage);
app.get("/admin/setting", settingPage);
app.get("/admin/admin", adminPage);
app.get("/user/detail/:id", authMiddleware, userdetailpage);
app.get("/package/detail/:id", authMiddleware, packagedetailpage);
app.get("/payment/confirmation", paymentConfirmationPage);
app.get(
  "/payment/confirmation/detail/:id",
  authMiddleware,
  paymentConfirmationdetailPage
);

//User Dashboard Router
app.get("/user/dashboard", userDashboardPage);
app.get("/user/bot/:id", authMiddleware, userBotPage);
app.get("/user/pricing/:id", authMiddleware, userPricePage);
app.get("/user/profile/:id", authMiddleware, userProfilePage);
app.get("/user/package/detail/:id", authMiddleware, userPackageDetail);

app.get("/auth/register", redirectMiddleware, registerPage);
app.post("/auth/user/store", userStore);
app.get("/auth/login", redirectMiddleware, loginPage);
app.post("/auth/user/login", redirectMiddleware, userLogin);
app.get("/auth/user/logout", userLogout);
app.post("/auth/package/store", authMiddleware, userPackageStore);
app.post("/user/bot/update", authMiddleware, userBotUpdate);
app.get("/alert/user/register", registerAlertPage);
app.post("/user/package/update", authMiddleware, packagetUpdate);
app.post("/user/confirm/payment", authMiddleware, userConfirmPayment);
app.get("/user/buypackage/alert", authMiddleware, userBuyPackageAlert);
app.get("/user/confirm/alert", authMiddleware, userConfirmAlert);
app.post("/payment/confirmation/update", authMiddleware, paymentConfirmUpdate);

app.use((req, res) => res.render("notfound"));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
