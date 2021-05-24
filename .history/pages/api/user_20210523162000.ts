
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb.js"

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const {db} = await connectToDatabase();
  const method = req.method;

  if (method === 'GET') {
    try {
      const users = await db.collection("users").findOne({})
      res.json(users);
    } catch (error) {
      res.status(400).json({success: false})
    }
  }
  

}

export default getUsers;