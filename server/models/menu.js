import mongoose from "mongoose";


const menuSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    items :[
        {
            title:{
                type:String
            },
            price:{
                type :String
            }
        }
    ]
    

});

export default mongoose.models.Menu ||  mongoose.model("Menu",menuSchema)