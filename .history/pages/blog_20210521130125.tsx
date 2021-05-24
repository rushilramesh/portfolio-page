import Layout from "../components/Layout";
import Head from "next/head"
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import ObjectId from 'mongodb'
import { GetStaticProps } from 'next'
import moment from "moment" 

export default function Blog({ 
    posts 
} : {
    posts : {
        _id : ObjectId,
        title : string,
        body: string,
        date: string,
        user: {
            name : string,
            status : string,
        }
    }[]
}) {
    return (
        <Layout>
            <Head>
                <title>My Blog</title>            
            </Head>
            <h1>My Blog</h1>
            <br />
            <Link href="./new"><a>Create post</a></Link> 

            <div className="w-full flex flex-col mx-auto justify-center items-center border-gray-200 border">
                 {posts.map(
                    post => {
                        return (
                        <Link href={`posts/${post._id}`} >
                        <a className="block rounded w-full lg:flex mb-10" >
                            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"  >
                                {post.body}
                            </div>
                            <div className="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                                {post.title}
                                </div>
                            </div>
                            <div className="flex mt-3">
                            <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
                                <div>
                                <p className="font-semibold text-gray-700 text-sm capitalize"> {post.user.name} </p>
                                <p className="text-gray-600 text-xs"> {moment(post.date).format('YYYY-MM-DD')} </p>
                                
                                </div>
                            </div>
                            </div>
                        </a>
                        </Link>)
                         
                     }
                 )}
            </div>

        </Layout> 
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}
