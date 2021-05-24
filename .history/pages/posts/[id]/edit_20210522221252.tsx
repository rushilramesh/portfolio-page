import { GetStaticPaths, GetStaticProps } from "next"
import { useState } from "react"
import { displayPost } from "../../../lib/post"

const Edit = ({
    postData 
} : {
    postData : {
        post : {
            _id: string
            title: string
            date: string
            user: {
                name: string
            }
        }
        content: string
    }
}) => {
    const [form, setForm] = useState({ title: '', description: '', body: '', date: Date()})
    return (
        <div>
            Hello
        </div>
    )
}


export default Edit

export const getStaticPaths : GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/users")
    const posts = await res.json()
    const paths = posts.map(post => `/posts/${post._id.toString()}/edit`)
    

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps : GetStaticProps = async ({params : {id}}) =>  {
    const postData = await displayPost(id)

    console.log(postData)

    return {
        props: {
            postData
        }
    }

}