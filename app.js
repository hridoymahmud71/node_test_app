var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose")
const dotenv = require("dotenv")

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var uploadRouter = require("./routes/upload");
var todoRouter = require("./routes/todos");

var app = express();
dotenv.config();

mongoose.connect("mongodb://localhost/node_test_app_mongo_db",
{
  useNewUrlParser:true,
  useUnifiedTopology:true
}
)
.then(() => console.log("connection successful"))
.catch((err) => console.log("mongo connection error: ",err));



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/upload", uploadRouter);
app.use("/todo", todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //console.log("my errors",err);

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
