import Layout from "../../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"
import { GetStaticProps, GetStaticPaths } from 'next'

export default function hello() {
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
    const posts = await fetch("http://localhost:3000/api/users").then(res => res.json())
    const paths = posts.map(post => post._id)

    return {
        paths,
        fallback: false
    }

}