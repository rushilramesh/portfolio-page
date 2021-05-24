
import { NextApiRequest, NextApiResponse } from "next";
import {connectToDatabase} from "../../utils/mongodb.js"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {db} = await connectToDatabase();
  const users = await db.collecction("users")
}
