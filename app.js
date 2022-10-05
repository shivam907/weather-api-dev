const express = require("express");
const bodyParser = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
app.set("views", "views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const mainRoutes = require("./routes/mainRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

app.use(mainRoutes);
app.use(weatherRoutes);

app.listen(1234);
