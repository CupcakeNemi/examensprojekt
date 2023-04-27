const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        length: { min: 4, max: 16},
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        length: {min: 8, max: 24}
    }
})

userSchema.static.signup = async function(username, email, password) {

    const exsist = await this.findOne({ email });

    if (exsist) {
        throw Error("Email or username already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({username, email, password: hash });
    return user;

}

// module.exports = mongoose.model('User', userSchema);
export default userSchema
