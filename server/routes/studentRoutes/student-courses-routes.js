const express = require("express");
const {
  getCourseByStudentId,
} = require("../../controllers/studentController/student-courses-controller");

const router = express.Router();

router.get("/get/:studentId", getCourseByStudentId);

module.exports = router;
