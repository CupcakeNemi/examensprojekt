const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET all tutorials'})
});

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single tutorial'});
})

router.post('/', (req, res) => {
    res.json({mssg: 'POST new tutorial'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE tutorial'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE tutorial'})
})

module.exports = router; 