import Layout from "../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import ObjectId from 'mongodb'
import { GetStaticProps, GetStaticPaths } from 'next'
import moment from "moment" 
import { useState } from "react"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

const Post = (
    {
        post
    } : {
        post: {
            _id: string
            title: string
            date: string
            body: string
        }
    } 
) => {

    const displayPost = async () => {
        const text = post.body
        const md = matter(text)
        const processedContent = await remark()
            .use(html)
            .process(md.content)
        return processedContent.toString()
    }

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
                <title>{post.title}</title>
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
                    <h1 className="text-3xl leading-5 font-extrabold uppercase text-center m-4">{post.title}</h1>
                    <div className="m-4">
                        {moment(post.date).format('YYYY-MM-DD')}
                    </div>
                    <div className="container w-8/12 mx-52 text-justify">
                        dangerouslySetInnerHTML={{ __html: contentHtml}}
                        
                    </div>
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
    const res = await fetch(`http://localhost:3000/api/users/${id.toString()}`, { method: 'GET'})

    const post = await res.json()

    return {
        props: {
            post
        }
    }

}



