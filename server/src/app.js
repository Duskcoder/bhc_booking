const express = require("express");
const app = express();
const cors = require("cors");
const cookie = require("cookie-parser");
const path = require("path");
const globalErrorHandler = require("./utils/error");
//Middleware
app.use(cors());
app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
//Routes Import
const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRoutes");
const propertiesRoute = require("./routes/propertiesRoutes");
const maintainanceRoute = require("./routes/maintainenceRoutes");
const bookingRoute = require("./routes/bookingRoutes")

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./env",
  });
}
app.use("/api/v2", userRoute);
app.use("/api/v2", adminRoute);
app.use("/api/v2", propertiesRoute);
app.use("/api/v2", maintainanceRoute);
app.use("/api/v2",bookingRoute)


app.use(globalErrorHandler);

module.exports = app;
