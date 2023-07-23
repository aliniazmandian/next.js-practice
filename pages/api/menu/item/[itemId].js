import dbConnect from "../../../../server/utils/dbConnect";
import Menu from "../../../../server/models/menu";
import { now } from "mongoose";


export default async function handler(req,res){

    dbConnect()
    const {query} = req

    if (req.method === "DELETE"){


     const   menu = await Menu.findById(query.categoryId)

    console.log(menu.items);
     const index = menu.items.findIndex((item)=>item._id == query.itemId)
     menu.items.splice(index,1)

     await menu.save()
     return  res.status(200).json({message: "item deleted !", menu } )
    }else if( req.method === "PUT"){

        console.log(req.body.addData , req.query);

        const   menu = await Menu.findById(req.query.itemId)
        menu.items.push({
            // _id : Date(now),
            title : req.body.addData.itemInputData,
            price: req.body.addData.priceInputData,
        })

        console.log(menu);
        await menu.save()
        return  res.status(200).json({message: "item added !", menu } )

    }



}