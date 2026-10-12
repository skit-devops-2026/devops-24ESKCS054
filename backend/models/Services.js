const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({

     name:{
        type:String,
        required:true
    },

    service:{
        type:String,
        required:true
    },

    slug: {
    type: String,
    required: true
},

detailSlug: {
    type: String,
    required: true,
    unique: true
},

    ageGroup:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    vital:{
        type:String,
        required:true
    },

    preventiveWellness:{
        type:String,
        required:true
    },

    image:{
    type:String,
    required:true
   },

    shortDescription:{
        type:String,
        required:true
    },

    longDescription:{
        type:String,
        required:true
    },

    mrp:{
        type:Number,
        required:true
    },

    sellingPrice:{
        type:Number,
        required:true
    },

    status:{
        type:Boolean,
        default:true
    }
},

{
timestamps:true

});

module.exports=mongoose.model("Services",serviceSchema);