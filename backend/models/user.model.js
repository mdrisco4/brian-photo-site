import { Schema, Mongoose } from "mongoose";

const userSchema = new Schema({
})

const User = Mongoose.model('User', userSchema);

module.exports = User;