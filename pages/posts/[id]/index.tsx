import Layout from "../../../components/Layout";
import Head from "next/dist/next-server/lib/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { server } from "../../../config";
import { GetStaticProps, GetStaticPaths } from "next";
import moment from "moment";
import { displayPost, getAllPosts } from "../../../lib/post";
import { useSession } from "next-auth/client";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Post = ({
  postData,
}: {
  postData: {
    post: {
      _id: string;
      title: string;
      date: string;
      user: {
        name: string;
      };
    };
    content: string;
  };
}) => {
  const router = useRouter();
  const [status, loading] = useSession();

  if (loading || router.isFallback) {
    return (
      <Layout>
        <h1 className="text-4xl tracking-tight leading-5 font-extrabold text-center m-4">
          Loading...
        </h1>
      </Layout>
    );
  }
  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you wish to delete this post?")) {
      deletePost();
    }
  };

  const deletePost = async () => {
    const postId = router.query.id;

    await fetch(`/api/users/${postId}`, {
      method: "Delete",
    }).then((res) => {
      if (res.ok) {
        router.push("/");
      }
    });
  };

  const Sharebar = () => {
    const props = {
      url: String(window.location),
      title: postData.post.title,
      rounded: true,
      size: "2rem",
    };

    return (
      <div className="space-x-1 float-right">
        <h3 className="text-center text-black mb-1">Share:</h3>
        <FacebookShareButton url={props.url} quote={props.title}>
          <FacebookIcon size={props.size} round={props.rounded} />
        </FacebookShareButton>

        <TwitterShareButton url={props.url} title={props.title}>
          <TwitterIcon size={props.size} round={props.rounded} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={props.url}
          title={props.title}
          separator=":: "
        >
          <WhatsappIcon size={props.size} round={props.rounded} />
        </WhatsappShareButton>

        <TelegramShareButton url={props.url} title={props.title}>
          <TelegramIcon size={props.size} round={props.rounded} />
        </TelegramShareButton>

        <EmailShareButton url={props.url} subject={props.title}>
          <EmailIcon size={props.size} round={props.rounded} />
        </EmailShareButton>
      </div>
    );
  };

  return (
    <Layout>
      <Head>
        <title>{postData.post.title}</title>
      </Head>
      <article>
        <div className="mt-12  h-screen">
          <div className="text-blue-600 hover:text-black font-medium text-justify -mt-4">
            {status ? (
              <button
                onClick={handleDelete}
                className=" relative text-base float-right text-blue-600 pt-4 md:pt-0 inline-block no-underline hover:text-black font-medium text-lg py-2  lg:-ml-2"
              >
                Delete
              </button>
            ) : (
              <Sharebar />
            )}
            <Link href="../blog">
              <a>← Back to blog</a>
            </Link>
          </div>
          <br />
          <div className="container  inline-block border-b mb-4 bprder-gray-300">
            <h1 className="text-4xl tracking-tight leading-5 font-extrabold text-center m-4">
              {postData.post.title}
            </h1>
            <div className="my-8 text-gray-500">
              {moment(postData.post.date).format("dddd, MMMM Do YYYY")}
            </div>
            <div className=" text-center inline-block self-center">
              <div className="container px-3  flex items-center mb-8">
                <img
                  alt=""
                  src="/images/displayPhoto.jpeg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700 -mb-2 text-sm capitalize">
                    {" "}
                    {postData.post.user.name}{" "}
                  </p>
                  <a
                    href="https://twitter.com/?lang=en"
                    className="text-blue-600 text-xs"
                  >
                    @rushil
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" w-7/12 inline-block mb-8 mt-8 text-justify"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map((post) => {
    return {
      params: { id: post._id.toString() },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const postData = await displayPost(id);
  return {
    props: {
      postData,
    },
    revalidate: 3,
  };
};
