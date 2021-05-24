import Layout from "../components/Layout";
import Head from "next/head"
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import ObjectId from 'mongodb'
import { GetServerSideProps, GetStaticProps } from 'next'
import moment from "moment" 

export default function Blog({ 
    posts 
} : {
    posts : {
        _id : string,
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
            

            <div className="conatiner flex my-16">
                <h1 className="text-6xl  font-bold text-center">My Blog</h1>
                <Link href="./new">
                    <a className="text-base float-right text-blue-600 pt-4 md:pt-0 inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">Create post</a>
                </Link> 
            </div>

            <div className="w-full flex-col mx-auto justify-center items-center ">
                 {posts.map(
                    post => {
                        return (
                        <Link href={`posts/${post._id}`} >
                            
                            <a className=" container items-center flex-col" >
                                
                                <div className="bg-white border rounded w-10/12 mb-16 px-4 py-4 flex flex-col items-center justify-between leading-normal shadow">
                                
                                    <div className="mt-3 md:mt-0 text-gray-700 font-bold p-1 text-3xl mb-2">
                                    {post.title}
                                    </div>
                                
                                <div className="h-48 w-7/12 flex bg-cover text-justify overflow-hidden opacity-75"  >
                                    {post.body}
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

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}
