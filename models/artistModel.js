const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please add the artist's name."]
    },
    yearEst:{
        type: String,
        require: [true, "Please add the year the artist started."]
    },
    email:{
        type: String,
        require: [true, "Please add the artist's email."]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Artist", artistSchema)