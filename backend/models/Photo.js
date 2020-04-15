// import { Schema, Mongoose } from "mongoose";
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const photoSchema = new Schema({
    // img: { data: Buffer, contentType: String }
    title: String,
    category: String,
})

const Photo = mongoose.model('User', photoSchema);

module.exports = Photo;