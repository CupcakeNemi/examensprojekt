import userSchema from '../models/userSchema.js';
import jwt from 'jsonwebtoken';


const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SESSION_SECRET, {expiresIn: '3d'} )
}

const loginUser = async (req, res) =>  {
    const {username, password} = req.body;

    try{
        const user = await userSchema.login(username, password);
        const token = createToken(user._id)

        res.status(200).json({username, user, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const signupUser = async (req, res) =>  {
    const {username, email, password} = req.body;
    try{
        const user = await userSchema.signup(username, email, password);

        const token = createToken(user._id)

        res.status(200).json({username, user, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
}

// module.exports = {loginUser, signupUser}
export default {loginUser, signupUser};