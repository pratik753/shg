const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json({ limit: "200kb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); //urlencodednp
app.use(cors()); //cors

const busRoute = require("./Routes/BusRoute");
const PaymentRoute = require("./Routes/PaymentRoute");
const UserRoute = require("./Routes/UserRoute");
//const entryRoute=require('./Routes/EntryRoutes')

console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));
app.use("/bus", busRoute);
app.use("/payment", PaymentRoute);
app.use("/user", UserRoute);
//app.use('/entry',entryRoute);
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
/*
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
*/
