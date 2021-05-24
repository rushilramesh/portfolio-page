import Layout from "../../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"


export default function hello() {
    return (
        <Layout>
            <Head>
                <title>My Post</title>
            </Head>
            <div className="mt-12">
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </Layout>

    )
}