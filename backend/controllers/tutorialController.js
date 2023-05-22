
import Tutorial from "../models/tutorialSchema.js";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";



// alla tutorials
const getTutorials = async (req, res) => {
    const tutorials = await Tutorial.find({});
    res.status(200).json(tutorials);
};

// save tutorial
const saveTutorial = async (req, res) => {
    console.log('Save Tutorial route reached');
    Tutorial.findByIdAndUpdate(req.body.tutorialId,{
        $push:{likes:req.user._id}
    }, {
        new: true
    }).exec((err, result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
}
const unsaveTutorial = async (req, res) => {
    Tutorial.findByIdAndUpdate(req.body.tutorialId,{
        $pull:{likes:req.user._id}
    }, {
        new: true
    }).exec((err, result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
}
// const saveTutorial = async (req, res) => {
//     const tutorialId = req.params.id;

//     try {
//         const tutorial = await Tutorial.findById(tutorialId);

//         if (!tutorial) {
//             return res.status(404).json({ error: 'Tutorial not found' });
//         }

//         tutorial.likes += 1;

//         await tutorial.save();

//         res.json({ message: 'Tutorial liked/saved successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Server error' });
//     }
// };

// en tutorial
const getTutorial = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "There is no such tutorial" })
    };
    const tutorial = await Tutorial.findById(id);

    if (!tutorial) {
        return res.status(404).json({ error: "coulnd find the tutorial" })
    };

    res.status(200).json(tutorial);
};

// User Page
const getUserTutorial = async (req, res) => {
    const tutorials = await Tutorial.find({ postedBy: req.user._id });
    const { _id } = req.user;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ error: "GET: There is no such tutorial" })
    };

    res.status(200).json(tutorials);
};

// ny tutorial
const createTutorial = async (req, res) => {

    const { filename } = req.file;
    const { title, stepsTitle, steps, difficulty, likes } = req.body;

    try {
        // postedby 
        const postedBy = req.user._id
        const tutorial = await Tutorial.create({ filename, title, stepsTitle, steps, difficulty, likes, postedBy });
        res.status(200).json(tutorial);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

// delete tutorial
const deleteTutorial = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "There is no such tutorial" })
    };

    const tutorial = await Tutorial.findByIdAndDelete({ _id: id });
    if (!tutorial) {
        return res.status(404).json({ error: "coulnd find the tutorial" })
    };
    res.status(200).json(tutorial);

}

// ändra tutorial
const updateTutorial = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "There is no such tutorial" })
    };

    const tutorial = await Tutorial.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!tutorial) {
        return res.status(404).json({ error: "coulnd find the tutorial" })
    };
    res.status(200).json(tutorial);
}

export default {
    createTutorial,
    getTutorials,
    getTutorial,
    deleteTutorial,
    updateTutorial,
    getUserTutorial,
    saveTutorial,
    unsaveTutorial
}