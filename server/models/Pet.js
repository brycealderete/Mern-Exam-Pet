const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:[3,'Pet Name must be 3 or more characters!'],
        unique:[true,"This pet name is already used"]
    },
    type:{
        type:String,
        required:true,
        minlength:[3,'Pet Type must be 3 or more characters!']
    },
    description:{
        type:String,
        required:true,
        minlength:[3,'Pet Description must be 3 or more characters!']
    },
    skill1:{
        type:String,
    },
    skill2:{
        type:String,
    },
    skill3:{
        type:String,
    }

},{timestamps:true})



mongoose.model("Pet",PetSchema);
PetSchema.plugin(uniqueValidator);