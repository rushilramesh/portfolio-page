import Layout from "../../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"
import ObjectId from 'mongodb'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
    postData
} : {
    postData: {
        title: string
        data: string
        body: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>My Post</title>
            </Head>
            <div className="mt-12">
                <Link href="../blog">
                    <a>← Back to blog</a>
                </Link>
            </div>
        </Layout>

    )
}

export const getStaticPaths : GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/users")
    const posts = await res.json()
    const paths = posts.map(post => `/users/posts/${post._id}`)

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps : GetStaticProps = async ({params}) =>  {
    const res = await fetch(`http://localhost:3000/api/users/${params.id}`)

    const post = await res.json()

    return {
        props: {
            post
        }
    }

}



