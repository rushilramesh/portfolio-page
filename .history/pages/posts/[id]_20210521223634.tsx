import Layout from "../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import ObjectId from 'mongodb'
import { GetStaticProps, GetStaticPaths } from 'next'

const Post = (
    {
        post
    } : {
        post: {
            title: string
            date: string
            body: string
        }
    } 
) => {

    return (
        <Layout fixedfoot>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article>
                <div className="mt-12 block">
                    <button className=" text-base float-right text-blue-600 pt-4 md:pt-0 inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">Delete</button>
                    <h1>{post.title}</h1>
                    <div>
                        {post.da}
                    </div>
                    <p>{post.body}</p>
                    <Link href="../blog">
                        <a>← Back to blog</a>
                    </Link>
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



