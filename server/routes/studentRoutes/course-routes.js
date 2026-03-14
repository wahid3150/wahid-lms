const express = require("express");
const {
  getAllStudentViewCourses,
  getAllStudentViewCoursesDetails,
  checkCoursePurchaseInfo,
} = require("../../controllers/studentController/course-controller");

const router = express.Router();

router.get("/get", getAllStudentViewCourses);
router.get("/get/details/:id", getAllStudentViewCoursesDetails);
router.get("/purchase-info/:id/:studentId", checkCoursePurchaseInfo);

module.exports = router;
