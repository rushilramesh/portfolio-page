
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb.js"

const getUsers = async (req: NextApiRequest, res: NextApiResponse) {
  const {db} = await connectToDatabase();
  const users = await db.collection("users").find({}).toArray()

  res.json(users);

}

export default getUsers;