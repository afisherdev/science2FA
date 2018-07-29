//===Package  Requirements===
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("jwt-simple");
// const cookieSession = require('cookie-session');
const passport = require("passport");
const keys = require("./config/keys");
const path = require("path");
const bodyParser = require("body-parser");
const validator = require("express-validator");

require("ethereum.js");

//========App Setup======
const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(express.static(path.join(__dirname, "client/build")));

require("./routes/router")(app);

//===========DEV PORT========
const PORT = process.env.PORT || 5000;
app.listen(PORT);
//
// const PORT = process.env.PORT || 3090
// const server = http.createServer(app);
// server.listen(PORT);
