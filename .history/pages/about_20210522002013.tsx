import Layout from '../components/Layout'
import Head from 'next/head'

const About = () => {
    return (
    <Layout>
        <Head>
            <title>About Me</title>
        </Head>
        <div className="container height-screen justify-center text-center mt-16 flex flex-col">
            <h1 className=" text-3xl font-extrabold mb-4">
                About Me
            </h1>
            <main
        id="wrapper"
        className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
      >
        <div
          id="sidebar"
          className="w-full sm:max-w-sm p-8 bg-indigo-300 to-white"
        >
            <img
              src="./images/displayPhoto.jpeg"
              alt="Profile Picture"
              className="rounded-full w-48 mx-auto mb-2"
            />
          
        </div>
      </main>
        </div>
    </Layout>
    )
}

export default About;