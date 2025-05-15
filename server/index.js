const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const blogRoutes = require("./routes/blogRoutes");
const dealRoutes = require("./routes/dealRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
const mongooseURL = process.env.MONGODB_URL;
mongoose
  .connect(mongooseURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Use routes
app.use("/api", blogRoutes); // Blog routes
app.use("/api", dealRoutes); // Deal routes

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
