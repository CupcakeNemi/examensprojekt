
const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect("mongodb+srv://Nemi:6ecLJry7ISbsEixC@virkalirka.ddqwf5f.mongodb.net/?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('Connected to MongoDB database');
}).catch((err) => {
console.error('Error connecting to MongoDB database', err);
});

// Create Express app
const app = express();

// Define routes
app.get('/', (req, res) => {
res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });


// Start server
app.listen(3000, () => {
console.log('Server started on port 3000');
});