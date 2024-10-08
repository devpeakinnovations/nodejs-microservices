const cors = require("cors");
const express = require("express");
const indexRouter = require("./routers");
const app = express();

app.use("/api", indexRouter);
app.use(cors());

module.exports = () => {
  
};
