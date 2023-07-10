import mongoose from "mongoose";


const menuSchema = new mongoose.Schema({
    title : {
        type : String ,
        unique :true ,
        required : true
    },
    description : {
        type:String ,
        required:true,
    },
});

export default mongoose.models.Menu ||  mongoose.model("Menu",menuSchema)