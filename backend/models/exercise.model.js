import { Schema, Mongoose } from "mongoose";

const exerciseSchema = new Schema({
})

const Exercise = Mongoose.model('User', exerciseSchema);

module.exports = Exercise;