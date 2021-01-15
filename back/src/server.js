const express = require("express");
const morgan = require("morgan");
var cors = require("cors");

const connectDB = require("./config/db");
const routes = require("./routes");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use("/api", routes);

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
