const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hash: {
        type: String
    },
    salt: {
        type: String
    }
}, {
    timestamps: true
})
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema)