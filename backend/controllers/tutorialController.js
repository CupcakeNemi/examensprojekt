const Tutorial = require('../models/tutorialSchema');
const mongoose = require('mongoose');
const {ObjectId} = require('mongodb'); 

// alla tutorials
const getTutorials = async(req,res) => {
    const tutorials = await Tutorial.find({});
    res.status(200).json(tutorials);
};

// en tutorial
const getTutorial = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "There is no such tutorial"})
    };
    const tutorial = await Tutorial.findById(id);

    if (!tutorial){
        return res.status(404).json({error: "coulnd find the tutorial"})
    };

    res.status(200).json(tutorial);
};

// ny tutorial
const createTutorial = async (req, res) => {

    const { filename} = req.file;
    const {title, stepsTitle, steps} = req.body;
    // const postedBy = ObjectId(req.session.userId);

    try{
        const tutorial = await Tutorial.create({filename, title, stepsTitle, steps});
        res.status(200).json(tutorial);
    } catch (error){
        res.status(400).json({error: error.message})
    }
};

// delete tutorial
const deleteTutorial = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "There is no such tutorial"})
    };

    const tutorial = await Tutorial.findByIdAndDelete({_id: id});
    if (!tutorial){
        return res.status(404).json({error: "coulnd find the tutorial"})
    };
    res.status(200).json(tutorial);

}

// ändra tutorial
const updateTutorial = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "There is no such tutorial"})
    };

    const tutorial = await Tutorial.findOneAndUpdate({_id: id}, {...req.body});
    if (!tutorial){
        return res.status(404).json({error: "coulnd find the tutorial"})
    };
    res.status(200).json(tutorial);
}

module.exports = {
    createTutorial,
    getTutorials,
    getTutorial,
    deleteTutorial,
    updateTutorial
}