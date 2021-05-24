import Layout from '../components/Layout'
import Head from 'next/head'
import { GetStaticProps } from 'next';

const About = ({
    user
} : {
    user : {
        name : string
        email: string
        job: string
        twitter: string
        facebook: string
        linkedin: string
        github: string
    }
}) => {
    return (
    <Layout>
        <Head>
            <title>About Me</title>
        </Head>
        <div className="container height-screen justify-center text-center mt-16 flex flex-col">
            <h1 className=" text-3xl font-extrabold mb-4">
                About Me
            </h1>
            <main id="wrapper" className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl">
        <div id="sidebar" className="w-full sm:max-w-sm p-8 bg-indigo-300 to-white">
            <img src="./images/displayPhoto.jpeg" alt="Profile Picture" className="rounded-full w-48 mx-auto mb-6"/>
            <h1 className="text-center text-3xl font-semibold my-2">{user.name}</h1>
            <h2 className="text-center">{user.job}</h2>
          
        </div>
      </main>
        </div>
    </Layout>
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/user')
    const user= await res.json()
    console.log(user)

    return {
        props : {
            user
        }
    }
}

export default About;