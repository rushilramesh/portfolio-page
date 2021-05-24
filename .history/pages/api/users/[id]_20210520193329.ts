import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const getPostbyId = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase()

    const id = req.query.id;
    const method = req.method;
    const posts = await db.collection('posts').find({"user.name" : id})

    switch(method) {
        case 'GET':
            try {
                const post = await posts
                    .find{""}
            } catch (error) {

            }
    }


}