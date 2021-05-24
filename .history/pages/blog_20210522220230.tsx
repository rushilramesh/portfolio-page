import Layout from "../components/Layout";
import Head from "next/head"
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import { GetServerSideProps, GetStaticProps } from 'next'
import moment from "moment" 

export default function Blog({ 
    posts 
} : {
    posts : {
        _id : string,
        title : string,
        description: string,
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
            <div className="container inline-block">
                <div className="text-base tracking-tighter float-right mt-4 text-blue-600 pt-4 md:pt-0 inline-block no-underline hover:text-black font-medium text-lg py-2 px-4  lg:ml-2">
                    <Link href="./new">
                        <a>Create post</a>
                    </Link> 
                </div>
                <div className="my-16 border-b border-gray-300">
                    <h1 className="text-4xl font-extrabold text-center tracking-tight">My Blog</h1>
                    <h2 className="text-gray-500 text-center mt-4 mb-6">A space for me to share my thoughts</h2>
                </div>
                
               
            </div>

            <div className="w-full flex-col mx-auto justify-center items-center ">
                 {posts.map(
                    post => {
                        return (
                        <Link href={`posts/${post._id}`} >
                            
                            
                                <div className="bg-white border rounded w-1/2 mb-16 mx-80 py-8 px-12 flex flex-col  border  border-blue-200 text-justify justify-center leading-normal shadow hover:bg-gray-50 hover:shadow-md">
                                    
                                    <div className="mt-3 md:mt-0 text-gray-700  font-bold p-1 text-4xl mb-4">
                                        <Link href={`posts/${post._id}`}>
                                            <a><button className="float-right text-base font">edit</button></a>
                                        </Link>
                                        {post.title}
                                    </div>
                                
                                    <div className="h-24  flex bg-cover mx-1 text-lg overflow-hidden opacity-75"  >
                                        {post.description}
                                    </div>
                                    <div className="flex mt-3">
                                        <img alt="" src="/images/displayPhoto.jpeg" className="h-10 w-10 rounded-full mr-2 object-cover" />
                                        <div className="items-left">
                                            <p className="font-semibold text-gray-700 text-sm capitalize"> {post.user.name} </p>
                                            <p className="text-gray-600 text-xs"> {moment(post.date).format('YYYY-MM-DD')} </p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                
                            
                            
                        </Link>)
                         
                     }
                 )}
            </div>

        </Layout> 
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}
