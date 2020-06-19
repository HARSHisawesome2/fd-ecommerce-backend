var express = require("express");
var router = express.Router();
const usersController = require("../controller/UsersController");
const { validateAdmin, validateUser } = require("../validator/UsersValidator");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/get", usersController.getAllUsers);
router.get("/get/:userId", validateUser, usersController.getUserId);
router.delete("/delete/:userId", validateAdmin, usersController.deleteById);

module.exports = router;
