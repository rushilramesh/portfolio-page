import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

export const displayPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/users/${id.toString()}`, { method: 'GET'})

    const post = await res.json()
    const text = post.body
    const md = matter(text)
    const processedContent = await remark()
        .use(html)
        .process(md.content)
    const content = processedContent.toString()
    return {
        content,
        ...{post}
    }
}
