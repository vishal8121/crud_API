const express = require('express');
const router = express.Router();
const userController = require("../controller/user.controller")


// Router for create new user
router.post("/", userController.create)
router.post("/login", userController.login)



module.exports = router;