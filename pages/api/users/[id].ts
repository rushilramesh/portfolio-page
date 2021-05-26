import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const getPostbyId = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase()

    const {
        query: { id },
        method
    } = req;

    const o_id = new ObjectId(id.toString())


    switch(method) {
        case 'GET':
            try {
            const post = await db.collection('posts')
                .findOne({_id : o_id});
            if (!post) {
                return res.status(400).json({success: false})
            }

            res.json(post)
            } catch (error) {
                return res.status(400).json({success: false}) 
            }
            break;
        case 'POST':
            const uploadPost = await db.collection('posts').update({_id: o_id}, req.body);
            if (!uploadPost) {
                return res.status(400).json({success: false})
            }

            res.json(uploadPost);
            break;
        case 'DELETE':
            const deletePost = await db.collection('posts').deleteOne({_id: o_id})

            if (!deletePost) {
                return res.status(400).json({success: false})
            }

            res.json({})
            break;
        default: 
            return res.status(400).json({success: false});
    }
}

export default getPostbyId