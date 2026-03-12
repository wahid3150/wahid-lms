const express = require("express");
const {
  getAllStudentViewCourses,
  getAllStudentViewCoursesDetails,
} = require("../../controllers/studentController/course-controller");

const router = express.Router();

router.get("/get", getAllStudentViewCourses);
router.get("/get/details/:id", getAllStudentViewCoursesDetails);

module.exports = router;
