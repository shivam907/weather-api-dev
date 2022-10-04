const express = require("express");

const router = express.Router();
const controller = require("../controllers/mainRoutes");
const homeRoute = router.get("/", controller);
const cityRoutes = router.get("/city", (req, res, next) => {
  console.log(req.query);
  res.send({
    query: req.query,
  });
});

module.exports = { homeRoute, cityRoutes };
