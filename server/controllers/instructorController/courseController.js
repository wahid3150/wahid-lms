const Course = require("../../models/Course");

exports.addNewCourse = async (req, res) => {
  try {
    const courseData = req.body; // req.body -> directly passed to model for simplicity
    const newlyCreatedCourse = new Course(courseData);
    const saveCourse = await newlyCreatedCourse.save();

    if (saveCourse) {
      res.status(201).json({
        success: true,
        message: "Course added successfully",
        data: {
          course: saveCourse,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courseList = await Course.find({});

    res.status(200).json({
      success: true,
      data: courseList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

exports.getCourseDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const CourseDetails = await Course.findById(id);

    if (!CourseDetails) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: CourseDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

exports.updateCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const UpdatedCourseData = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      UpdatedCourseData,
      { new: true },
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};
