const express = require("express");
const {
  getCoursesByStudentId,
} = require("../../controllers/studentController/student-courses-controller");

const router = express.Router();

router.get("/get/:studentId", getCoursesByStudentId);

module.exports = router;
