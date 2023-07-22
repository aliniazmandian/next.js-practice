import dbConnect from "../../../../server/utils/dbConnect";
import Menu from "../../../../server/models/menu";


export default async function handler(req,res){

    dbConnect()
    const {query} = req

    if (req.method === "DELETE"){


     const   menu = await Menu.findById(query.categoryId)

    console.log(menu.items);
     const index = menu.items.findIndex((item)=>item._id == query.itemId)
     menu.items.splice(index,1)

     await menu.save()
     
    }



}