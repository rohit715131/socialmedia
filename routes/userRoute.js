const express = require("express");
const router = express.Router();
const { register, getUser } = require("../controller/userController");
router.post("/users/register", register);
router.get("/posts", getUser);

module.exports = router;
