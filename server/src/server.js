const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("Shutting Error throught");
  process.exit(1);
});
//connection
mongoose
  .connect(process.env.LOCALHOST)
  .then(() => {
    console.log("Connection Database");
  })
  .catch((err) => {
    console.log("Error on connection");
  });

process.on("rejectionHandled", (err) => {
  console.log("Shutting Error throught On Server");
  process.exit(1);
});

app.listen(process.env.PORT, () => {
  console.log(`Listen port ${process.env.PORT}`);
});
