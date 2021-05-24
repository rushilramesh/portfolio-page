import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const getPostbyId = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase()
    const posts = await db.collection('posts')

    const id = req.query.id;
    const method = req.method;

    switch(method) {
        case 'GET':
            try {
                const post = await db
                    .collection()
            } catch (error) {

            }
    }


}