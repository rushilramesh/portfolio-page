import Layout from "../../components/Layout"
import Head from "next/dist/next-server/lib/head"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import ObjectId from 'mongodb'
import { GetStaticProps, GetStaticPaths } from 'next'

const Post = () => {

    return (
        <Layout>
            <Head>
                <title>blog post</title>
            </Head>
            <div className="mt-12">
                <Link href="../blog">
                    <a>← Back to blog</a>
                </Link>
            </div>
        </Layout>

    )
}
//     {
//     postData
// } : {
//     postData: {
//         title: string
//         data: string
//         body: string
//     }
// } 
    

// Post.getInitialProps = async ( {query: {id}}) => {
//     const res = await fetch(`http://localhost:3000/api/users/${id}`)
//     const { data } = await res.json();

//     return { postData: data }
// }

export default Post;
export const getStaticPaths : GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/users")
    const posts = await res.json()
    const paths = posts.map(post => post._id)
    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

// export const getStaticProps : GetStaticProps = async ({params : {id}}) =>  {
//     const res = await fetch(`http://localhost:3000/api/users/${id.toString()}`, { method: 'GET'})

//     const post = await res.json()

//     return {
//         props: {
//             post
//         }
//     }

// }



