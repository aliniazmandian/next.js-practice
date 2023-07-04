

import { coffes } from "../../../data/coffes"

export default function handler(req, res) {
    
    return res.status(200).json({ coffes: coffes })
}