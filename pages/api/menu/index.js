


import dbConnect from "../../../server/utils/dbConnect"
import Menu from "../../../server/models/menu"



export default async function handler(req, res) {

  dbConnect()

  const {method , body } = req
  if (method === 'POST'){
    const {inputData} = body

    await Menu.create({title : inputData , items: []})

    const menu = await Menu.find({})
    return res.status(201).json({message:'new Item added' , menu})
  }  else if (method === "GET"){

    const menu = await Menu.find({})

    return res.status(200).json({menu})
  }
}

