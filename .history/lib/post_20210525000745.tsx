import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
import { server } from "../config"
import { connectToDatabase } from "../utils/mongodb"

export const displayPost = async (id) => {
    const db = await connectToDatabase()
    const res = await db.collection('posts').findOne({_id : id}).toArray()

    const post = await res.json()
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
        ...{post}
    }
}
