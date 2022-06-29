const express = require("express");
const router = express();
const authController = require("../controller/authContollers");

router.set("view engine", "ejs");
router.use(express.static("public"));

router.get("/", authController.home);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/register", authController.register_get);
router.post("/register", authController.register_post);
router.get("/logout", authController.logout_get);

module.exports = router;
