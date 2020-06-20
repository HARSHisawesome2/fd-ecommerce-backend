var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/UsersRouter");
var productRouter = require("./routes/ProductRouter");

var app = express();

const privateURLMongoDB = process.env.PRIVATE_URL_MONGODB_LOCALHOST;
// ini adalah sebuah must, dibutuhkan ini untuk mendetect databasemu
mongoose.connect(privateURLMongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);

module.exports = app;
