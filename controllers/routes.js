const path = require("path");
const dna = require("./dna");

module.exports = app => {
  //  Receives an ASCII string which is then converted into a DNA string
  app.post("/dna", (req, res) => {
    res.json(dna(req.body.input)).status(200);
  });

  //  Gets the index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
};