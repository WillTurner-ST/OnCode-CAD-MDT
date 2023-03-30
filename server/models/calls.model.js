const mongoose = require("mongoose");

const CallSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Call Type required"],
        minLength: [3, "Call Type must be at least 5 characters"],
    },
    location: {
        type: String,
        required: [true, "Call Location is required"],
        minLength: [2, "Call Location 2 characters"],
    },
    status:{
        type:String,
        required:[true,"Call status is required"],
        enum:{
            values:[
                'En Route',
                'On Scene',
                'Completed',
            ]
            
        },
    },
    assignedTo: {
        type: String,
        minLength: [3, "Please assign an officer"],
    },

})

module.exports = mongoose.model("Calls", CallSchema); 