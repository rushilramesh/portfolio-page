import Layout from "../../components/Layout";
import Head from "next/head"
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import ObjectId from 'mongodb'

export default function Blog({ 
    posts 
} : {
    posts : {
        _id : ObjectId,
        title : string,
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

            <div>
                 {posts.map(
                    post => {
                        return (
                        <Link href={`/${post._id}`} >
                        <a className="block rounded w-full lg:flex mb-10" >
                            <div className="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                                {post.title}
                                </div>
                            </div>
                            <div className="flex mt-3">
                                <div>
                                <p className="font-semibold text-gray-700 text-sm capitalize"> {post.user.name} </p>
                                <p className="text-gray-600 text-xs"> {post.date} </p>
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

export async function getInitialProps() {
    const res = await fetch('http://localhost:3000/api/users')
    const {data} = await res.json()
    return {posts: data}
}
