const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

//  Creates a log file
const logStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a"
});

logger.token("input", (req) => req.body.input);

const logFormat = "[:date[web]]:method :url :input took :response-time ms to complete";

// Express middleware
app.use(logger(logFormat, {
  stream: logStream
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views/'));

//  Routes for the server
const routes = require("./controllers/routes");
routes(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
