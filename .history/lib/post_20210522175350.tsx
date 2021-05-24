import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
const nl2br = require('locutus/php/strings/nl2br')

export const displayPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/users/${id.toString()}`, { method: 'GET'})

    const post = await res.json()
    const text = post.body
    const md = matter(text)
    const processedContent = await remark()
        .use(html)
        .process(md.content)
    const content = nl2br(processedContent.toString())
    return {
        content,
        ...{post}
    }
}
