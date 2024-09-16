const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  salary: { type: Number, required: true },
  hireDate: { type: Date, required: true, default: Date.now },
  address: { type: String },
  skills: { type: [String], required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
