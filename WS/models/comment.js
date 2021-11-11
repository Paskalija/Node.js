const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
       description: {
        type: String,
        required: true
    }
}, { timestapms: true });

module.exports = mongoose.model('comment', commentSchema);