const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const dotenv = require("dotenv");
dotenv.config();
const controller = require("./controller");
const checkForSession = require("./checkForSession");
const api = require("../src/api");

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("connected to massive");
  })
  .catch(error => {
    console.log("error connecting to db", error);
  });

const app = express();
app.use(bodyParser.json());
app.use(checkForSession);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);

app.post(api.register, controller.register);
app.post(api.login, controller.login);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
