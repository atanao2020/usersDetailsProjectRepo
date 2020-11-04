const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    }
})

const Users = mongoose.model("Users", UsersSchema)
module.exports = Users