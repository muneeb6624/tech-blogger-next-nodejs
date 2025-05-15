const multer = require('multer');
const path = require('path');

// Storage configuration for single file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Destination folder
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Single file upload middleware
const uploadSingle = upload.single('coverImg');

// Multiple files upload middleware
const uploadMultiple = upload.array('imglist', 10); // Adjust 'imglist' and max count as needed

module.exports = { uploadSingle, uploadMultiple };
