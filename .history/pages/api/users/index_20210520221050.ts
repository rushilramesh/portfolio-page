
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb"; 

const getPostsbyUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const posts = await db
        .collection("posts")
        .find({})
        .limit(4)
        .toArray()

    res.json(posts);

}