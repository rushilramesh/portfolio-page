
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb"; 

const getPostsbyUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const posts = await db
        .collection("posts")
        .limit(4)
        .sort({"date" : -1})
        .toArray()

    res.json(posts)

}