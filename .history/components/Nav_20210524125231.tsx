/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import Image from 'next/dist/client/image'
import router, { useRouter } from 'next/router'
import { signIn, signOut, useSession} from 'next-auth/client'


const navs = [
   {name: 'Home', href: '/'},
   {name: 'About Me', href: 'http://localhost:3000/about'},
   {name: 'Blog', href: 'http://localhost:3000/blog'}
]


export default function Nav() {
   const [session, loading] = useSession()

   if (loading) {
      return <h1></h1>
   }
   
   return (
      <nav id="header" className="w-full z-30 top-10 py-1 bg-gradient-to-r from-gray-300 via-gray-200 to-indigo-600 shadow-lg  mt-15">
         <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label  className="cursor-pointer md:hidden block">
            <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle"/>
         
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                  {navs.map((item) => (
                  <li key={item.name} >
                     <Link href={item.href}>
                        <a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >{item.name}</a>
                     </Link>
                  </li>))}
               </ul>
            </nav>
         </div>
         
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex space-x-4 items-center w-full md:w-full">
               { session && (
                  <Image src="/images/displayPhoto.jpeg" alt="DP" width={30} height ={30} className="rounded-full"/>
               )}
               <button className=" text-gray-300 p-2  mr-4 hover:bg-gray-200 hover:text-indigo-600">
                  {session ? (
                        <button onClick={e => {
                           e.preventDefault()
                           signOut()
                           router.push('/')
                        }}>Sign Out</button> 
                        ) : (
                        <button onClick={e => {
                           e.preventDefault()
                           signIn("Credentials")
                        }}>Sign in</button>
                     ) 
                  }
               </button>
            </div>
         </div>
         </div>
      </nav>
  )
}

