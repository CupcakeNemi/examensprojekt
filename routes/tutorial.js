const express = require('express');
const {createTutorial, getTutorials, getTutorial, deleteTutorial, updateTutorial} = require('../controllers/tutorialController');

const router = express.Router();

router.get('/', getTutorials);

router.get('/:id', getTutorial);

router.post('/', createTutorial);

router.delete('/:id', deleteTutorial);

router.patch('/:id', updateTutorial);

module.exports = router; 