import Layout from '../components/Layout'
import Head from 'next/head'
import { GetStaticProps } from 'next';
import { SocialIcon } from 'react-social-icons';

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
                <div id="sidebar" className="w-full sm:max-w-sm p-8 bg-indigo-200 to-white">
                    <img src="./images/displayPhoto.jpeg" alt="Profile Picture" className="rounded-full w-48 mx-auto mb-6"/>
                    <h1 className="text-center text-4xl font-semibold my-2">{user.name}</h1>
                    <h2 className="text-center text-xl">{user.job}</h2>

                    <div className="text-justify text-lg px-2 my-6">
                        <h2 className="text-xl font-semibold mb-4">Contact</h2>
                        <div className="flex items-center my-6 space-x-4 ">
                            <SocialIcon network="email" bgColor="#FD3838"/>
                            <a className="hover:underline" href={user.email}>{user.email}</a>
                        </div>

                        <div className="flex items-center my-6 space-x-4 ">
                            <SocialIcon network="twitter" />
                            <a className="hover:underline" href={user.twitter}>Twitter</a>
                        </div>

                        <div className="flex items-center my-6 space-x-4 ">
                            <SocialIcon network="linkedin" bgColor="#FD3838"/>
                            <a className="hover:underline" href={user.linkedin}>linkedIn</a>
                        </div>

                        <div className="flex items-center my-6 space-x-4 ">
                            <SocialIcon network="github" />
                            <a className="hover:underline" href={user.github}>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="w-full text-justify p-12">
                    <div id="profile" className="prose">
                        <h2 className="font-bold text-2xl uppercase py-2 text-indigo-600">Profile</h2>
                        <p>
                        I'm a self-taught web developer focusing on the core web
                        fundamentals - HTML, CSS and JS. I'm experienced in frontend
                        frameworks like Vue and React and static site generators like
                        Next.js and Eleventy. I write SCSS or use CSS frameworks like
                        TailwindCSS, Bootstrap or Bulma to speed up styling of my
                        projects.
                        </p>
                        <p>
                        I am highly motivated in expanding my horizons day by day for
                        better performance, testing and user experience.
                    </p>
                </div>

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