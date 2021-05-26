import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import matter from "gray-matter";
import { server } from "../../../config";
import { displayPost, getAllPosts } from "../../../lib/post";

const Edit = ({
  post,
}: {
  post: {
    _id: string;
    title: string;
    description: string;
    body: string;
    date: string;
    user: {
      name: string;
    };
  };
}) => {
  const [form, setForm] = useState({
    title: post.title,
    description: post.description,
    body: post.body,
    user: { name: post.user.name, status: "author" },
    date: post.date,
  });
  const router = useRouter();
  const postId = router.query.id;

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const setBodyToHtml = () => {
    setForm({
      ...form,
      body: matter.stringify(form.body, {}),
    });
  };

  const handleSubmit = (event) => {
    setBodyToHtml();
    event.preventDefault();
    if (window.confirm("Confirm changes?")) {
      updatePost();
    }
  };

  const updatePost = async () => {
    await fetch(`${server}/api/users/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.ok) {
          router.push("/");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Layout>
      <Head>
        <title>Edit Post</title>
      </Head>

      <div className="py-12 w-8/12 mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <h1 className=" text-4xl my-4">Edit form</h1>
          <div className="p-6 bg-white border-b text-justify border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="container flex-col mb-4">
                <label className="text-xl text-justify">Title</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="title"
                  value={form.title}
                  placeholder="Title "
                  id="title"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="container flex-col mb-4">
                <label className="text-xl text-justify">Description</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="description"
                  value={form.description}
                  placeholder="About the post"
                  id="description"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mb-8">
                <label className="text-xl text-justify">Content</label>
                <textarea
                  className="shadow form-textarea mt-1 block border-2 border-gray-300 p-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
                  value={form.body}
                  name="body"
                  placeholder="My Thoughts..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex p-1">
                <button
                  role="submit"
                  className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                >
                  Submit
                </button>
                <div className="container text-right text-gray-600">
                  Written By
                  <p className="text-sm">{post.user.name}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => {
    return {
      params: { id: post._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const postData = await displayPost(id);
  const post = postData.post;

  return {
    props: {
      post,
    },
  };
};
