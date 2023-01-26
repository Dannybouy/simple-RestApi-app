import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        age: {
            type: Number,
        },
    })

export default mongoose.model("Users", userSchema)