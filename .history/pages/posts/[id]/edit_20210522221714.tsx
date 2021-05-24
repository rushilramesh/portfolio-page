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
            description: string
            date: string
            user: {
                name: string
            }
        }
        content: string
    }
}) => {
    const [form, setForm] = useState({ title: postData.post.title, description: postData.post.description, body: postData.content})

    const handleChange = () => {}
    const handleSubmit = () => {}

    return (
        <div className="py-12 w-8/12 mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b text-justify border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="container flex-col mb-4">
                                <label className="text-xl text-justify">Title</label>
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" placeholder="Title "id="title" onChange={handleChange}></input>
                            </div>
                            <div className="container flex-col mb-4">
                                <label className="text-xl text-justify">Description</label>
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" value={form.title} placeholder="About the post"id="description" onChange={handleChange}></input>
                            </div>
                            <div className="mb-8">
                                <label className="text-xl text-justify">Content</label>
                                <textarea className="shadow form-textarea mt-1 block border-2 border-gray-300 p-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48" name="body" placeholder="My Thoughts..." onChange={handleChange}></textarea>
                            </div>

                            <div className="flex p-1">
                                <button role="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400">Submit</button>
                                <div className="container text-right text-gray-600">
                                     Written By
                                    <p className="text-sm">{postData.post.user.name}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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