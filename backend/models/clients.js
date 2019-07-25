const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employeeNo: {
        type:String,
        required: false
    },
    projectDate: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    summary: {
        type: String,
        required: true
    },
    modulesCovered: {
        type: String, 
        required: false
    }
})

module.exports = mongoose.model("Client", clientSchema)