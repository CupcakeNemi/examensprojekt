const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

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
});

userSchema.statics.signup = async function(username, email, password) {
    // Validation
    if (!email || !password || !username) {
        throw Error("All fields must be filled")
    }
    if (!validator.isEmail(email)){
        throw Error("Email is not valid")
    }
    if (!validator.isStrongPassword(password)){
        throw Error("Make a stronger password")
    }

    const exsist = await this.findOne({ email });
    if (exsist) {
        throw Error("Email or username already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({username, email, password: hash });
    return user;
};

userSchema.statics.login = async function(username, password){
    if (!password || !username) {
        throw Error("All fields must be filled")
    }
    const user = await this.findOne({ username });
    if (!user) {
        throw Error("Your username or password may be incorrect");
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        throw Error("Your username or password may be incorrect")
    }

    return user;
}


module.exports = mongoose.model('User', userSchema);
