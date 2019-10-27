const express = require("express");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8000;

// Express middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routes for the server
const routes = require("./controllers/routes");
routes(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
