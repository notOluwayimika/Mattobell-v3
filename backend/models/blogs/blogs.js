const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    category: {
        type:String,
        required: true
    },
    content: {
        type: String,
        required: true    
    },
    imageUrl: {
        type : String,
        required : false    
    },
    author: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        required: false
    },
    tags: {
        type:[String],
        required: false    
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps : true
});

module.exports = mongoose.model("Blog", blogSchema)