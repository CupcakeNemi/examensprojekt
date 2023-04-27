// import userSchema from '../models/userSchema';
const userSchema = require('../models/userSchema');
const loginUser = async (req, res) =>  {
    res.json({mssg: 'Login user'})
}

const signupUser = async (req, res) =>  {
    const {username, email, password} = req.body;
    try{
        const user = await userSchema.signup(username, email, password);
        res.status(200).json({username, user})
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {loginUser, signupUser}