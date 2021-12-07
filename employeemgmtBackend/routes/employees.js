const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {Manager,user}=require("./auth")
app.use(express.json());


const EmployeeManagementEmployees= new mongoose.model(
  "EmployeeManagementEmployees",
  new mongoose.Schema({
    Name: {
      type: String,
      required: true,  
    },
    dateOfBirth: {
      type: Date,
      required: true,
       
    },
    gender: {
        type: String,
         required: true,
    },
    salary: {
        type: Number,
        required: true,
         min:0,
    },
    
  })
);
// Manager
app.post("/add-new-employee", Manager, async (req, res) => {
 
    const employee = new EmployeeManagementEmployees({
        Name: req.body.Name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        salary:req.body.salary,
    });
    const result = await employee.save();
    res.send(result);
});
// Manager,
app.post("/delete-employee",Manager, async (req, res) => {
    const result = await EmployeeManagementEmployees.findByIdAndRemove(req.body.id);
    res.send(result);
});
//Manager
app.post("/edit-employee",Manager, async (req, res) => {
  
    const result = await EmployeeManagementEmployees.updateOne({ _id: req.body._id }, {
        $set:{
        Name: req.body.Name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        salary:req.body.salary,
        }
    });
    res.send(result);
});

app.post("/get-all-employees",Manager, async (req, res) => {
  
    const result = await EmployeeManagementEmployees.find();
    res.send(result);
});
module.exports = app;