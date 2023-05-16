import userSchema from '../models/userSchema.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const requireAuth = async (req, res, next) => {
// verify user is authenticated
const { authorization } = req.headers;
console.log(authorization,"denna är undefined")

if (!authorization) {
return res.status(401).json({error: 'Authorization token required'});
}

const token = authorization.split(' ')[1];


try {
    console.log("token",token)
    
    const { _id } = jwt.verify(token, process.env.SESSION_SECRET);

    req.user = await userSchema.findOne({ _id }).select('_id');
    console.log("id", _id)
    next();

} catch (error) {
console.log(error);
res.status(401).json({error: 'Request is not authorized'});
}
}

export default requireAuth;