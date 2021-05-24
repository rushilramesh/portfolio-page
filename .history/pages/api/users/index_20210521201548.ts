
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
                .sort({date: -1})
                .limit(10)
                .toArray()

                res.json(posts);
            } catch (error) {
                return res.status(400).json({success: false})
            }
            break;
        case 'POST':
            try {
                const post = await db.collection("posts").insertOne(req.body)

                res.json(post)
            } catch (error) {
                return res.status(400).json({success: false})
            }
            break;
        default:
            return res.status(400).json({success: false})  
        
    }
    
    

}

export default getPostsbyUser



