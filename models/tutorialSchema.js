const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    contentImg: {
        type: String,
        required: false
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
    }
});

module.exports = mongoose.model('Tutorial', tutorialSchema);
