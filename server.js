require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const tutorialRoutes = require('./backend/routes/tutorial');
// const { userSchema } = require('./models/userSchema');

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URL, {
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

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/tutorials', tutorialRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});




// async function newUser(obj){
//     const errors = userSchema.validate(obj);

//     if(errors.length > 0) {
//         return {error: errors[0].message};
//     }

//     const user = await getEmail(obj.email);
//     if (!user){
//         const hash = bcrypt.hashSync(obj.password, saltRounds);
//         obj.password = hash;

//         return await db.collection("users").insertOne(obj);
//     } else {
//         return {error: "ERROR"};
//     }
// }