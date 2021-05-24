import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
      <div>
        <h1 >Welcome to MyPage</h1>
      </div>
      <div>
        <Link href='login.tsx'>
          <a>Sign in here</a>
        </Link>
      </div>
    </>

  )
}
