import Layout from "../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import ObjectId from 'mongodb'
import { GetStaticProps, GetStaticPaths } from 'next'
import moment from "moment" 
import { useState } from "react"
import { displayPost } from "../../lib/post"


const Post = (
    {
        postData
    } : {
        postData: {
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
    } 
) => {

    const router = useRouter()


    const handleDelete = () => {
        if (window.confirm('Are you sure you wish to delete this post?')) {
            deletePost()
        }
    }

    const deletePost = async () => {
        const postId = router.query.id
        
        await fetch(`http://localhost:3000/api/users/${postId}`, {
            method: 'Delete'
        }).then(res => {
            if(res.ok) {
                router.push('/')
            }
        })
    }

    return (
        <Layout>
            <Head>
                <title>{postData.post.title}</title>
            </Head>
            <article>
                <div className="mt-12 block h-screen">
                    <div className="text-blue-600 hover:text-black font-medium text-justify -mt-4">
                        <button onClick={handleDelete} className=" relative text-base float-right text-blue-600 pt-4 md:pt-0 inline-block no-underline hover:text-black font-medium text-lg py-2  lg:-ml-2">Delete</button>
                        <Link href="../blog">
                                <a>← Back to blog</a>
                        </Link>
                    </div>
                    <br/>
                    <div className="container w-9/12 mx-40 flex-col border-b mb-4 bprder-gray-300">
                        <h1 className="text-4xl tracking-tight leading-5 font-extrabold text-center m-4">{postData.post.title}</h1>
                        <div className="my-8 text-gray-500">
                            {moment(postData.post.date).format('dddd, MMMM Do YYYY')}
                        </div>
                        <img alt="" src="/images/displayPhoto.jpeg" className="h-10 w-10 rounded-full mr-2 object-cover" />
                        <div className="items-left">
                            <p className="font-semibold text-gray-700 text-sm capitalize"> {postData.post.user.name} </p>
                            <p className="text-gray-600 text-xs">  </p>
                        
                        </div>
                    </div>
                    <div className=" w-8/12 mx-52 text-justify" dangerouslySetInnerHTML={{ __html: postData.content}} />
                </div>
            </article>
        </Layout>

    )
}

    

export default Post;
export const getStaticPaths : GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/users")
    const posts = await res.json()
    const paths = posts.map(post => `/posts/${post._id.toString()}`)
    

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



