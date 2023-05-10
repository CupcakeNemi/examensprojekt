const multer  = require('multer')
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './backend/public/uploads'); 
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + file.originalname);
    } 
});

let upload = multer({ storage: storage, limits: {filesize: 300000}});

const express = require('express');
const {createTutorial, getTutorials, getTutorial, deleteTutorial, updateTutorial} = require('../controllers/tutorialController');

const router = express.Router();

router.get('/', getTutorials);
router.get('/UserPage', getTutorials), 

router.get('/:id', getTutorial);

router.post('/', upload.single('filename'), createTutorial);

router.delete('/:id', deleteTutorial);

router.patch('/:id', updateTutorial);

module.exports = router; 