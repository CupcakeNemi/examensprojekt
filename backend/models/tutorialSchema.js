import mongoose from 'mongoose';
import { Schema } from 'mongoose';

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
    difficulty:
    {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
});


const Tutorial = mongoose.model("Tutorial", tutorialSchema);

// module.exports = mongoose.model('Tutorial', tutorialSchema);
export default Tutorial;
