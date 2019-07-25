const mongoose = require("mongoose")

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required : true
    },
    subCategory:{
        type: String,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Shop", shopSchema)