require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");
module.exports = function () {
  // winstone for storing errors in log file
  process.on("uncaughtException", (ex) => {
    console.log("we Got uncaughtExceptions");
    console.log(ex);
    winston.log({
      level: "error",
      message: ex.message,
      stack: ex.stack,
      metadata: ex, // Put what you like as meta
    });
  });
  process.on("unhandledRejection", (ex) => {
    console.log("we Got unhandled promise rejection");
    winston.log({
      level: "error",
      message: ex.message,
      stack: ex.stack,
      metadata: ex, // Put what you like as meta
    });
  });
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  // winstone for storing errors in mongodb database
  winston.add(
    new winston.transports.MongoDB({
      db: process.env.DB_HOST,
      options: { useUnifiedTopology: true },
      collection: "systemlog",
    })
  );
};