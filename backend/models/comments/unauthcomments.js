const mongoose = require("mongoose");
const unAuthCommentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: false

    },
    comment: {
        type: String,
        required: true
    },
    blog_id:{
        type: mongoose.Schema.Types.ObjectId
        },
    date: {
        type: Date,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("UnAuthComment", unAuthCommentSchema)