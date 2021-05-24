import Layout from "../../components/Layout";
import Head from "next/head"

export default function Blog({data}) {
    return (
        <Layout>
            <Head>
                <title>My Blog</title>            
            </Head>
            <h1>My Blog</h1>
            <br />

            <div className="container"></div>

        </Layout> 
    )
}

export async function getAllPosts() {
    const res = await fetch('http://http://localhost:3000/api/users')
    const {data} = await res.json()
    return { posts: data}
}
