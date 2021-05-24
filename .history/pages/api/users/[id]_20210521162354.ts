import { ObjectID, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const getPostbyId = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase()

    const {
        query: { id },
        method
    } = req;

    const post = await db.collection('posts')
    const postRes = await post.find({"_id": ObjectId(id)}).toArray()
    
    res.json(postRes)


    // switch(method) {
    //     case 'GET':
    //         try {
    //         const post = await db.collection('posts')
    //             .find(id);
    //         if (!post) {
    //             return res.status(400).json({success: false})
    //         }

    //         res.json(post)
    //         } catch (error) {
    //             return res.status(400).json({success: false}) 
    //         }
    //         break;
    //     case 'POST':
    //         const uploadPost = await db.collection('posts').findByIdAndUpdate(id, req.body);
    //         if (!uploadPost) {
    //             return res.status(400).json({success: false})
    //         }

    //         res.json(uploadPost);
    //         break;
    //     case 'DELETE':
    //         const deletePost = await db.collection('posts').deleteOne({_id: id})

    //         if (!deletePost) {
    //             return res.status(400).json({success: false})
    //         }

    //         res.json({})
    //         break;
    //     default: 
    //         return res.status(400).json({success: false});
    // }
}

export default getPostbyId