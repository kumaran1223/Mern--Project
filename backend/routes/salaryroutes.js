const express = require("express");
const router = express.Router();

// Salary Model
let salarySchema = require("../models/salary");

// CREATE Salary
router.route("/CreateSalary").post(async (req, res, next) => {
  try {
    const result = await salarySchema.create(req.body);
    res.json({
      data: result,
      message: "Data successfully added!",
      status: 200,
    });
  } catch (err) {
    return next(err);
  }
});

// READ Salaries
router.route("/").get(async (req, res, next) => {
  try {
    const result = await salarySchema.aggregate([
      {
        $lookup: {
          from: "employees",
          localField: "employeeid",
          foreignField: "_id",
          as: "employee",
        },
      },
    ]);
    res.json({
      data: result,
      message: "All items successfully fetched.",
      status: 200,
    });
  } catch (err) {
    return next(err);
  }
});

// Delete Salary
router.route("/delete-salary/:id").delete(async (req, res, next) => {
  try {
    await salarySchema.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Data successfully updated.",
    });
  } catch (err) {
    console.log(err);
  }
});

// Get Single Salary
router.route("/get-salary/:id").get(async (req, res, next) => {
  try {
    const result = await salarySchema.findById(req.params.id);
    res.json({
      data: result,
      message: "Data successfully fetched.",
      status: 200,
    });
  } catch (err) {
    return next(err);
  }
});

// Update Salary
router.route("/update-salary/:id").put(async (req, res, next) => {
  try {
    const result = await salarySchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json({
      data: result,
      msg: "Data successfully updated.",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;