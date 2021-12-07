const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const EmployeeManagementUsers= new mongoose.model(
  "EmployeeManagementUsers",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      unique: true,
      required: true,
    },
   
    role: { type: String, default: "user" },
  })
);
app.use(express.json());
app.post("/sign-up", async (req, res) => {
  const salt = await bcrypt.genSalt(5);
  let password = req.body.password;
  // console.log("password:" + password);
  if (password) {
    password = await bcrypt.hash(password, salt);

    const user = new EmployeeManagementUsers({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: password,
      userName:req.body.userName,
      role: req.body.role,
    });

    await user.save();
    res.send({ register: true });
  } else res.status(400).send({ register: true,msg:"please send all fields"});
});
app.post("/get-users", async (req, res) => {
  const users = await EmployeeManagementUsers.find();
  if (!users) return res.status(500).send("there are no available users");

  res.send(users);
});
app.post("/sign-in", async (req, res) => {
  
  const users = await EmployeeManagementUsers.findOne({
    userName: req.body.userName,
  });
 
  if (users == null) {
    return res.status(400).send({
      msg: "user name or password not correct ",
      signed: false,
    });
  }
  const validPassword = await bcrypt.compare(req.body.password, users.password);
  if (validPassword) {
    const token = jwt.sign(
      { id: users._id, role: users.role, userName: users.userName },
      process.env.clkey
    );
    res.status(200).send({
      msg: "successful",
      signed: true,
      token: token,
      role: users.role,
      userName:users.userName
    });
  } else {
    res.status(400).send({
      msg: "user name or password not correct",
      signed: false,
    });
  }
});
app.post("/get-single-user", async (req, res) => {
  console.log(req.body.userName);
  var userName = req.body.userName;
  console.log(userName);
  const search = await EmployeeManagementUsers.findOne({
    userName: new RegExp(userName ? userName : null, "i"),
  });
  console.log(search);
  if (search != null) res.send(search);
  else {
    res.send({ notfound: true });
  }
});
app.post("/edit-profile", async (req, res) => {
  const salt = await bcrypt.genSalt(5);
  let password = req.body.password;
  console.log("password:" + password);
  if (password) {
    password = await bcrypt.hash(password, salt);
  const user = await EmployeeManagementUsers.updateOne(
    { _id: req.body._id },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: password,
         userName:req.body.userName,
        role: req.body.role,
      },
    }
  );
  console.log(req.body.userName);
  res.send(user);}else res.status(500).send("password is required");
});

module.exports = app;
