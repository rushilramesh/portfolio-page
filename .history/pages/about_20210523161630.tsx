import Layout from '../components/Layout'
import Image from 'next/image';
import Link from 'next/link';
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
    const skills = ['React', 'Next.js', 'Tailwind', 'MongoDB', 'Git']
    return (
    <Layout>
        <Head>
            <title>About Me</title>
        </Head>
        <div className="container height-screen justify-center text-center mt-16 flex flex-col">
            <h1 className=" text-4xl font-bold mb-4">
                About Me
            </h1>
            <main className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl">
                <div className="w-full sm:max-w-sm p-8 bg-indigo-200 to-white">
                    <Image src="/images/displayPhoto.jpeg" alt="Profile Picture" width={140} height={160} className="rounded-full  mx-auto mb-6"/>
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
                    <div>
                        <h2 className="font-bold text-2xl uppercase py-2 text-indigo-600">Profile</h2>
                        <p>
                        Hello, Rushil Here! I'm an undergraduate student at NUS and a self-taught web developer.
                        I have experience in frontend frameworks such as React and static side generators such as Next.js. I'm familiar with the use of CSS frameworks like
                        TailwindCSS to streamline the styling process of my projects. Check out some of my work <a href={user.github} className="text-blue-500 underline hover:text-gray-600">here</a>!
                        </p>
                        <br/>
                        <p>
                        I am highly motivated in expanding my horizons day by day for
                        better performance, testing and user experience. I thrive in a team environment and I'm always looking forward to new challenges. 
                        I spend whatever little of my free time posting on <Link href="./blog"><a className="text-blue-500 underline hover:text-gray-600">my blog</a></Link>. 
                        </p> 
                    </div>
                    <hr className="mt-8 mb-8" />
                    <div >
                        <h2 className="font-bold text-2xl uppercase py-2 text-indigo-600">Experience</h2>
                        <div>
                            <h3 className="mb-4">Joni.AI</h3>
                            <section className="mb-4">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                Jun 2021:
                                </div>
                                <div className="lg:inline-block lg:w-8/12 w-full">
                                Fullstack Developer
                                </div>
                            </section>
                            <section className="mb-4">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                Task:
                                </div>
                                <div className="lg:inline-block lg:w-8/12 w-full">
                                Develop enterprise-grade systems using modern web development technologies.
                                Write documentation for codebases and user guides.
                                Support the structuring and development of new projects that
                                Joni.AI develops, while also contributing to other areas of work, where applicable.
                                </div>
                            </section>
                            <section className="mb-4">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                Description:
                                </div>
                                <div className="lg:inline-block lg:w-8/12 w-full">
                                Joni.Ai is a Singapore-based start-up educational technologies firm established in 2019 to create an educational
                                ecosystem where every student can flourish regardless of circumstance. We focus on
                                predictive algorithmic analytics, machine learning and artificial intelligence to create a
                                scalable dynamic learning experience.
                                </div>
                            </section>
                            <section className="mb-6">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                Tools:
                                </div>
                                <div className="lg:inline-block lg:w-8/12 space-x-4 w-full">
                                    {skills.map(skill => {
                                    return <span className="rounded bg-indigo-200 px-3 py-1">{skill}</span> 
                                    })}
                                </div>
                            </section>
                        </div>
                        <hr className="mt-8 mb-8" />
                        <div>
                            <h2 className="font-bold text-2xl uppercase py-2 text-indigo-600">Education</h2>
                            <h3 className="mb-4">National University of Singapore</h3>
                            <section className="mb-6">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                Aug 2020 - May 2024:
                                </div>
                                <div className="lg:inline-block lg:w-8/12 w-full">
                                Bachelor of Computing (hons.) in Computer Science
                                </div>
                            </section>
                        </div>
                    </div>

            </div>
            </main>
        </div>
    </Layout>
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/user', {method: 'GET'})
    const user= await res.json()
    console.log(user)

    return {
        props : {
            user
        }
    }
}

export default About;