import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
import { server } from '../config'

export const displayPost = async (id) => {
    console.log(server)
    const res = await fetch(`${server}/api/users/${id.toString()}`, { method: 'GET'})

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
