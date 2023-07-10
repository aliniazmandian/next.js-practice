import mongoose from "mongoose"


const connection = {}



async function dbConnect(){
    if (connection.isConnect){
        return
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true ,
        useUnifiedTopology:true,
    })

    connection.isConnect = db.connections[0].readyState
}

export default dbConnect