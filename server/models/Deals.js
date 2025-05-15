const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    overlaycolor: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    }
}, {
    timestamps: true // auto add time 
});

module.exports = mongoose.model("Deal", dealSchema);
