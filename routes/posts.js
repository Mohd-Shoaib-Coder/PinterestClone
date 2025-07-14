const mongoose=require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/meraDatabase")

const Schema=mongoose.Schema;
const postSchema=new mongoose.Schema({
    imageText:{
        type:String,
        required:true,
    },
    image:{

        type:String,
        // required:true,


    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    likes:{
        type:Array,
        default:[],
    },
})

const Post=mongoose.model("Post",postSchema)

module.exports=Post;
