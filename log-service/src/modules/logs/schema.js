const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    userId: String,
    eventType: String,
    timestamp: Date
});

module.exports = mongoose.model('Log', logSchema);