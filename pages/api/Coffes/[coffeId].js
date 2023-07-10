

import { coffes } from "../../../data/coffes"

export default function handler(req, res) {
    const {coffeId} = req.query
    if (req.method === "DELETE"){
        const index = coffes.findIndex((coffe)=>coffe.id === parseInt(coffeId))
        coffes.splice(index,1) 
    }
    return res.status(200).json({message: "item deleted !", coffes } )
}