const express = require("express");
var path = require("path");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8000;

// Express middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Requires the controllers
const dna = require("./controllers/dna");

//  Routes for the server
//  Gets the index page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//  Receives an ASCII string which is then converted into a DNA string
app.post("/dna", (req, res) => {
  res.json(dna(req.body));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});