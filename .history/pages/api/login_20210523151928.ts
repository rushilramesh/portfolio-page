import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";
import jwt from "jsonwebtoken";

const login = async (req: NextApiRequest, res: NextApiResponse) => {

    if(!req.body) {
        res.status(400).end('Input required')
    }

    const { db } = await connectToDatabase();

    const {username, password} = req.body

    if (req.method === 'POST') {
        try {
            const user = await db.collection('users').find({username: username})
            if (!user) {
                res.json({message: 'do again'})
            }
            if (user.password === password) {
                user.update({signedIn: true})
                res.json({message: 'OK', ...user})
                
            } else {
                res.json({message: "username or password is wrong"})
            }
        } catch {
            res.status(401).json({message: 'something went wrong'})
        }
    } else {
        res.status(405).json({message: "Only accepts POST"})
    }
        

}

export default login