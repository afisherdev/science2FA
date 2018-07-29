//===Package  Requirements===
const express = require("express");
const http = require("http");

const cors = require("cors");
require("dotenv").config();
// const cookieSession = require('cookie-session');

const path = require("path");
const bodyParser = require("body-parser");

const twofactor = require("./ethereum.js");

//========App Setup======
const app = express();
app.use(cors());

app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));

require("./routes/router")(app);

//===========DEV PORT========
const PORT = process.env.PORT || 5000;
app.listen(PORT);
//
// const PORT = process.env.PORT || 3090
// const server = http.createServer(app);
// server.listen(PORT);
