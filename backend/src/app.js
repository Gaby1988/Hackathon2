// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");

// create express app

const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// use some application-level middlewares

app.use(express.json());

app.use(cors({}));

// import and mount the API routes

const router = require("./routes/router");

app.use(router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "./public/data/uploads/")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
