import Layout from "../../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"
import ObjectId from 'mongodb'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post() {
    return (
        <Layout>
            <Head>
                <title>My Post</title>
            </Head>
            <div className="mt-12">
                <Link href="../blog">
                    <a>← Back to home</a>
                </Link>
            </div>
        </Layout>

    )
}

export const getStaticPaths : GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/users")
    const posts = await res.json()
    const paths = posts.map(post => post._id)

    return {
        paths,
        fallback: false
    }
}

