const express = require("express");

const router = express.Router();
const controller = require("../controllers/mainController");
const homeRoute = router.get("/", controller);

module.exports = homeRoute;
