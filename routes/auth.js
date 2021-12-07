const express = require("express");
const jwt = require("jsonwebtoken");
const Manager = (req, res, next) => {
  const receivedToken = req.headers.token;
  
  const decodedToken = jwt.verify(
    receivedToken,
    process.env.clkey,
    function (err, decode) {
      
      if (err) return res.status(401).send("access denaid");
      else {
        if (decode.role === "manager") next();
        else {
          return res.status(401).send("you don't have manager privileges");
        }
      }
    }
  );
};

const user = (req, res, next) => {
  const receivedToken = req.headers.token;
  const decodedToken = jwt.verify(
    receivedToken,
  process.env.clkey,
    function (err, decode) {
      if (err) return res.status(401).send("access denaid");
      else {
        req.user = decode;
        if (decode.role === "user") next();
        else {
          return res.status(401).send("you are not authorised");
        }
      }
    }
  );
};
module.exports = {
  Manager,
  user,
};
