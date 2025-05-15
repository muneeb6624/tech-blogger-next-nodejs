const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: false 
    },
    description: {
        type: String,
        required: true
    },
    readTime: {
        type: Number, // Assuming this is in minutes
        required: true
    }
}, {
    timestamps: true // This will add create and update times auto
});


module.exports = mongoose.model("Blog", blogSchema);
