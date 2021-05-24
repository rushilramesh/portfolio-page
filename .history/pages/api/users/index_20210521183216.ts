
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb"; 

const getPostsbyUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const method = req.method

    switch(method) {
        case 'GET':
        try {
            const posts = await db
            .collection("posts")
            .find({})
            .limit(10)
            .toArray()

            res.json(posts);
        } catch (error) {
            res.status(400).json({success: false})
        }
        
    }
    
    

}

export default getPostsbyUser



