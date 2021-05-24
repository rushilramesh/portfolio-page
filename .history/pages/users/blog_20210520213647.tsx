import Layout from "../../components/Layout";
import Head from "next/head"
import Link from "next/link";

export default function Blog({posts}) {
    return (
        <Layout>
            <Head>
                <title>My Blog</title>            
            </Head>
            <h1>My Blog</h1>
            <br />

            <div className="container">
                 {posts.map(post => {
                    <Link href={`/${post._id}`} >
                    <a className="block rounded w-full lg:flex mb-10" >
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{backgroundImage: 'url("https://dummyimage.com/720x400/")'}} >
                        </div>
                        <div className="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
                        <div>
                            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                            Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" class="h-10 w-10 rounded-full mr-2 object-cover" />
                            <div>
                            <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                            <p className="text-gray-600 text-xs"> 14 Aug </p>
                            </div>
                        </div>
                        </div>
                    </a>
                    </Link>
                     
                 })}
            </div>

        </Layout> 
    )
}

export async function getAllPosts() {
    const res = await fetch('http://http://localhost:3000/api/users')
    const {data} = await res.json()
    return { posts: data}
}
