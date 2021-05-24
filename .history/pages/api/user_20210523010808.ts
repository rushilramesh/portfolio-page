
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb.js"

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const {db} = await connectToDatabase();
  const method = req.query.method;

  switch (method) {
    case 'GET':
      const users = await db.collection("users").findOne({})
      res.json(users);
  }

}

export default getUsers;