
import dbConnect from "../../../server/utils/dbConnect"
import Menu from "../../../server/models/menu"

export default async function handler(req, res) {
    
    dbConnect()


    const {menuId} = req.query
  
    if (req.method === "DELETE"){
       await  Menu.findByIdAndDelete(menuId)
       const menu = await Menu.find({})
       return  res.status(200).json({message: "category deleted !", menu } )
    }
   
   
}