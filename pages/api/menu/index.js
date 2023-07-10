

import { coffes } from "../../../data/coffes"
import dbConnect from "../../../server/utils/dbConnect"
import Menu from "../../../server/models/menu"

dbConnect()

export default async function handler(req, res) {
  if (req.method === 'POST'){
    // const newItem ={
    //     id:Date.now(),
    //     title:req.body.item
    // }

    // menu.push(newItem)
    // return res.status(201).json({message:"new Item added", menu})
  }  else if (req.method === "GET"){

    const menu = await Menu.find({})

    return res.status(200).json({menu})
  }
}

