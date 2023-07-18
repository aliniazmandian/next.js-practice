


import dbConnect from "../../../server/utils/dbConnect"
import Menu from "../../../server/models/menu"



export default async function handler(req, res) {

  dbConnect()
  const {method , body } = req
  if (req.method === 'POST'){
    const {inputData} = body

    await Menu.create({title : inputData , items: [{title: "a" , price: "200"}]})

    const menu = await Menu.find({})
    return res.status(201).json({message:'new Item added' , menu})
  }  else if (req.method === "GET"){

    const menu = await Menu.find({})

    return res.status(200).json({menu})
  }
}

