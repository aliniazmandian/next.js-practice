import mongoose from "mongoose";


const menuSchema = new mongoose.Schema({
    title : {
        type : string ,
        unique :true ,
        required : true
    },
    description : {
        type:string ,
        required:true,
    },
});

export default mongoose.model("Menu",menuSchema)