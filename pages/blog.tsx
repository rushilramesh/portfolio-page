import Layout from "../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { GetStaticProps } from "next";
import moment from "moment";
import { useSession } from "next-auth/client";
import { server } from "../config";
import { getAllPosts } from "../lib/post";

export default function Blog({
  posts,
}: {
  posts: {
    _id: string;
    title: string;
    description: string;
    body: string;
    date: string;
    user: {
      name: string;
    };
  }[];
}) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <Layout>
        <div>Loading....</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>My Blog</title>
      </Head>
      <div className="container inline-block">
        {session ? (
          <div className="text-base float-right mt-4 text-blue-600 pt-4 md:pt-0 inline-block no-underline hover:text-black font-medium text-lg py-2 lg:ml-2">
            <Link href="./new">
              <a>Create post</a>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
        <div className="my-16 border-b border-gray-300">
          <h1 className="text-4xl font-extrabold text-center tracking-tight">
            My Blog
          </h1>
          <h2 className="text-gray-500 text-center mt-4 mb-6">
            A space for me to share my thoughts
          </h2>
        </div>
      </div>

      <div className="container w-full inline-block mx-auto justify-center items-center ">
        {posts.map((post) => {
          return (
            
            <div className="bg-white border rounded w-1/2 mb-16 mx-80 py-8 px-12 inline-block  border  border-blue-200 text-justify justify-center leading-normal shadow hover:bg-gray-100 hover:shadow-md">
              <Link href={`posts/${post._id}`}>
                <a>
                  <div className="mt-3 md:mt-0 text-gray-700  font-bold p-1 text-4xl mb-4">
                    {session && (
                      <Link href={`posts/edit/${post._id}`}>
                        <a>
                          <button className="float-right text-base text-blue-600 pt-4 md:pt-0 inline-block no-underline hover:text-black">
                            Edit
                          </button>
                        </a>
                      </Link>
                    )}
                    {post.title}
                  </div>

                  <div className="h-24  flex bg-cover mx-1 text-lg overflow-hidden opacity-75">
                    {post.description}
                  </div>
                  <div className="flex mt-3">
                    <img
                      alt=""
                      src="/images/displayPhoto.jpeg"
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div className="items-left">
                      <p className="font-semibold text-gray-700 text-sm capitalize">
                        {" "}
                        {post.user.name}{" "}
                      </p>
                      <p className="text-gray-600 text-xs">
                        {" "}
                        {moment(post.date).format("YYYY-MM-DD")}{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
    revalidate: 1,
  };
};
