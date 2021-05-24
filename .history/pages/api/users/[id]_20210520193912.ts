import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const getPostbyId = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase()

    const id = req.query.id;
    const method = req.method;
    const posts = await db.collection('posts')

    switch(method) {
        case 'GET':
            const post = await posts
                .findById(id);
            if (!post) {
                return res.json({success: false})
            }

            res.json(post)
        

            
            
    }


}