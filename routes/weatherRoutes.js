const express = require("express");

const router = express.Router();
const controller = require("../controllers/weatherControllers");

const cityRoutes = router.get("/weather", controller);

module.exports = cityRoutes;
