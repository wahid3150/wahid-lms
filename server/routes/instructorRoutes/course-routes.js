const express = require("express");
const {
  addNewCourse,
  getAllCourses,
  getCourseDetailsById,
  updateCourseById,
} = require("../../controllers/instructorController/courseController");

const router = express.Router();

router.post("/add", addNewCourse);
router.get("/get", getAllCourses);
router.get("/get/details/:id", getCourseDetailsById);
router.put("/update/:id", updateCourseById);

module.exports = router;
