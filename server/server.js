require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes/userRoutes");
const mediaRoutes = require("./routes/instructorRoutes/media-routes");
const instructorCourseRoute = require("./routes/instructorRoutes/course-routes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

//database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log(e));

// routes configuration
app.use("/auth", authRoutes);
app.use("/media", mediaRoutes);
app.use("/instructor/course", instructorCourseRoute);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
});
