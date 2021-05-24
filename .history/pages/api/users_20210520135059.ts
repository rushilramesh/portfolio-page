
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb.js"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {db} = await connectToDatabase();
  const users = await db.collecction("users").find({}).toArray()

  res.json(users);

}
