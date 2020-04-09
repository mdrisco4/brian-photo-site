// import { Schema, Mongoose } from "mongoose";
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
})

const Exercise = mongoose.model('User', exerciseSchema);

module.exports = Exercise;