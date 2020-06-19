var express = require("express");
var router = express.Router();
const usersController = require("../controller/UsersController");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/get", usersController.getAllUsers);
router.get("/get/:userId", usersController.getUserId);
router.delete("/delete/:userId", usersController.deleteById);

module.exports = router;
