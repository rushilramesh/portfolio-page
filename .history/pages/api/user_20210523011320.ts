
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb.js"

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const {db} = await connectToDatabase();
  const method = req.query.method;

  switch (method) {
    case 'GET':
      try {
        const users = await db.collection("users").findOne({})
        res.json(users);
      } catch (error) {
        return res.status(400).json({success: false})
      }
      break;
    
    case 'CHANGE': {
      try {
        const users = await db.collection("users").updateOne({}, 
          {
            $set: {
              signedIn: req.body
            } 
          }
        ) 
      } catch (error) {
        return res.status(400).json({success: false}) 
      }
    }
  }

}

export default getUsers;