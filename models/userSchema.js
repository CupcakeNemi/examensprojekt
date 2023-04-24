import Schema from 'validate';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        length: { min: 4, max: 16}
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        length: {min: 8, max: 24}
    }
})

export {userSchema};
