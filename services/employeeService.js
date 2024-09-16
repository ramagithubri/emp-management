const Employee = require('../models/Employee');

// Create Employee
exports.createEmployee = async (employeeData) => {
  const newEmployee = new Employee(employeeData);
  return await newEmployee.save();
};

// Get All Employees
exports.getAllEmployees = async (query) => {
  const searchQuery = query.search ? { name: new RegExp(query.search, 'i') } : {};
  return await Employee.find(searchQuery);
};

// Search Employees by Name
exports.searchEmployees = async (query) => {
  return await Employee.find({ name: new RegExp(query, 'i') });
};

// Update Employee by ID
exports.updateEmployee = async (id, employeeData) => {
  return await Employee.findByIdAndUpdate(id, employeeData, { new: true });
};

// Delete Employee by ID
exports.deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};
