
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb"; 

const getPostsbyUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
   
    const id = req.query.id;

    const posts = await db
        .collection('posts')
        .find({"user.name" : id})
        .limit(10)
        .sort({"date" : -1})
        .toArray()

    res.json(posts)

}