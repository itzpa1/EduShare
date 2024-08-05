const mongoose = require("mongoose");

const book = new mongoose.Schema({
    
        url: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        pages: {
            type: Number,
            required: false,
        },
        isbn: {
            type: Number,
            required: false,
        },
        desc: {
            type: String,
            required: true,
        },
        form: {
            type: String,
            default: "Ebook",
            enum: ["PDF","HARDCOPY"],
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
},{timestamps: true});
module.exports = mongoose.model("books",book);