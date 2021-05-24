import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";
import jwt from "jsonwebtoken";

const login = async (req: NextApiRequest, res: NextApiResponse) => {

    if(!req.body) {
        res.status(400).end('Input required')
    }

    const { db } = await connectToDatabase();

    const {username, password} = req.body

    if (req.method === 'POST') {}
        try {
            const user = await db.collection('users').find({username: username})
            if (user.password === password) {
                res.json({message: 'OK'})
            } 
            
        } catch {
            res.status(401).json({message: 'something went wrong'})
        }
    }

}

export default login