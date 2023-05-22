import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import tutorialRoutes from './backend/routes/tutorial.js';
import userRoutes from './backend/routes/user.js';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

// Create Express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('backend/public/uploads'));

app.use(express.json());
app.use((req, res, next) => {
    // console.log(req.path, req.method);
    next();
});


app.use(cors());
app.use('/api/tutorials', tutorialRoutes);
app.use('/api/user', userRoutes);

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
