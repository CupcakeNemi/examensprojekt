const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    stepsTitle: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model('Tutorial', tutorialSchema);
