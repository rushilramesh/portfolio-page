import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
import { server } from "../config"
import { connectToDatabase } from "../utils/mongodb"
import { ObjectId } from "mongodb";



export const displayPost = async (id) => {
    const { db } = await connectToDatabase();
    const o_id = new ObjectId(id.toString())
    const res = await db.collection('posts')
                .findOne({_id : o_id});
    const post = JSON.parse(JSON.stringify(res))
    const text = post.body
    const md = matter(text)
    const processedContent = await remark()
        .use(html)
        .process(md.content)
    const content = processedContent.toString().split('\n').map((item, key) => {
        return (
            `<span key=${key}>
              ${item}
              <br/>
            </span>`
          )
    }).join('')
    return {
        content,
        ...{ post}
    }
}

export const getAllPaths = async () => {
    const { db } = await connectToDatabase(); 
    const paths = await db.collection("posts").find({}, {_id: 1}).toArray()
    return paths;
}

export const getAllPosts = async () => {
    const { db } = await connectToDatabase();
    const posts = await db
                .collection("posts")
                .find({})
                .sort({date: -1})
                .limit(10)
                .toArray()
                
    return posts;
}

const getUser = async () => {
    const { db } = await connectToDatabase();
    const user = await db.collection("users").findOne({})
    return user
}