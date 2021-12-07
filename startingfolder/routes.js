const express = require("express");

/////////////////////////////////////////////////////////////////
const errormidleware = require("../middleware/error");
const signin = require("../routes/signin");
const employee = require("../routes/employees");
module.exports = function (app) {
  app.use(express.json());
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use("/employeemngmt", signin);
  app.use("/employeemngmt", employee);
  app.get("/employeemngmt", (req, res) => {
    res.send( "<h1>Hello! well come to Employee Management system</h1>");
  });
  app.use(errormidleware);
};