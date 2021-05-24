
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb"; 

const getPostsbyUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const posts = await db
        .collection("posts")
        .find({})
        .toArray()

    res.json(posts);

}

export default getPostsbyUser

db.posts.insert({
    title: 'Post One',
    body: 'Body of post one',
    category: 'News',
    tags: ['news', 'events'],
    user: {
      name: 'John Doe',
      status: 'author'
    },
    date: Date()
  })

db.posts.insertMany([
    {
      title: 'Post Two',
      body: 'Body of post two',
      category: 'Technology',
      tags: ['tech', 'events'],
      user: {
        name: 'John Doe',
        status: 'author'
      },
      date: Date()
    },
    {
      title: 'Post Three',
      body: 'Body of post three',
      category: 'News',
      tags: ['news', 'events'],
      user: {
        name: 'John Doe',
        status: 'author'
      },
      date: Date()
    },
    {
      title: 'Post Four',
      body: 'Body of post Four',
      category: 'Entertainment',
      tags: ['entertainment', 'events'],
      user: {
        name: 'John Doe',
        status: 'author'
      },
      date: Date()
    }
  ])