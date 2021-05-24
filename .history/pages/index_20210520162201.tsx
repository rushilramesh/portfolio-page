import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
      <div className="container mx-200 text-center">
        <h1>Welcome to MyPage</h1>
        <Link href='login.tsx'>
          <a className="text">Sign in here</a>
        </Link>
      </div>
    </>

  )
}
