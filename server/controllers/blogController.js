const Blog = require("../models/Blog");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


// Create blog post
exports.createBlog = async (req, res) => {
  console.log("Create blog running");
  console.log("file ", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "Cover image is required." });
  }

  try {
    const file = req.file.path;
    const newBlog = new Blog({ ...req.body, coverImg: file });
    await newBlog.save();
    res
      .status(201)
      .json({ message: "Blog created successfully.", data: newBlog });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

// Get all blogs posts
exports.getBlogs = async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find();
    res.status(200).json({ data: blogs, totalBlogs });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Blog ID is required." });
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return updatedBlog
      ? res
          .status(200)
          .json({ message: "Blog updated successfully.", data: updatedBlog })
      : res.status(404).json({ message: "Blog not found!" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

// Delete blog post
exports.deleteBlog = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Blog ID is required." });
  }

  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    return deletedBlog
      ? res.status(200).json({ message: "Blog deleted successfully." })
      : res.status(404).json({ message: "Blog not found!" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

// Picture upload using Multer
exports.uploadimg = upload.single("coverImg"); // Middleware to handle file upload


// for handling multiple image uploads
exports.uploadmultiple = upload.array('imglist', 10);