import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Personal Portfolio</title>
      </Head>
        <div className="container mx-auto border flex flex-col items-center justify-center w-full mt-16 flex-1 px-20 text-center opacity-75" >

          <h1 className="text-6xl font-extrabold">
            Welcome to my Page
            
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Link href="./about">
              <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">My Portfolio &rarr;</h3>
                <p className="mt-4 text-xl">
                  Find out more about me.
                </p>
              </a>
            </Link>

            <Link href="./blog">
              <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">My Blog &rarr;</h3>
                <p className="mt-4 text-xl">
                  Check out my latest posts and reviews on my blog!
                </p>
              </a>
            </Link>
          </div>
        </div>
      
    </Layout>

  )
}
