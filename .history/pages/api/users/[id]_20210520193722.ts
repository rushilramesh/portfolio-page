import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const getPostbyId = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase()

    const id = req.query.id;
    const method = req.method;
    const posts = await db.collection('posts')

    switch(method) {
        case 'GET':
            try {
                const post = await posts
                    .findById(id);
                
            catch (error();
            )
    }


}