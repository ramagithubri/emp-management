const employeeService = require('../services/employeeService');

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json({
      success: true,
      message: 'Employee created successfully!',
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create employee',
      error: error.message,
    });
    next(error);
  }
};

exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await employeeService.getAllEmployees(req.query);
    res.status(200).json({
      success: true,
      message: 'Employees retrieved successfully!',
      data: employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve employees',
      error: error.message,
    });
    next(error);
  }
};

exports.searchEmployees = async (req, res, next) => {
  try {
    const employees = await employeeService.searchEmployees(req.query.name);
    if (employees.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Employees found!',
        data: employees,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No employees found with that name',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error while searching for employees',
      error: error.message,
    });
    next(error);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.updateEmployee(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Employee updated successfully!',
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update employee',
      error: error.message,
    });
    next(error);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    await employeeService.deleteEmployee(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Employee deleted successfully!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete employee',
      error: error.message,
    });
    next(error);
  }
};
