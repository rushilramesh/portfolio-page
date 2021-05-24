import Layout from '../components/Layout'
import Head from 'next/head'

const About = () => {
    return (
    <Layout>
        <div className="container height-screen justify-center text-center mt-16 flex flex-col">
        <h1 className=" text-3xl underline">
            About Me
        </h1>
        <p>My cv</p>
        </div>
    </Layout>
    )
}

export default About;