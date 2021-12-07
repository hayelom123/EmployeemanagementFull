const winston = require("winston");

module.exports = function (err, req, res, next) {
  
  winston.log({
    level: "error",
    message: err.message,
    stack: err.stack,
    metadata: err, // Put what you like as meta
  });
  
 
  console.log(err.message);
  res.status(500).send({err});
};
