require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const tutorialRoutes = require('./backend/routes/tutorial');
const userRoutes = require('./backend/routes/user');
const bodyParser = require('body-parser')
import cors from 'cors';


// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB database');
    // Start server
    app.listen(process.env.PORT, () => {
        console.log('Server started on port', process.env.PORT);
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB database', err);
});

// Create Express app
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('public/uploads'));

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/tutorials', tutorialRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
