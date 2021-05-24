/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'

const navs = [
   {name: 'Home', href: '/'},
   {name: 'About Me', href: '/'},
   {name: 'Blog', href: '/'}
]


export default function Nav(loggedIn: boolean) {
   
  return (
    <nav id="header" className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 mt-15">
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
              { loggedIn ? (
               <>
                {navs.map((item) => (
                <li>
                  <Link href={item.href}>
                     <a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >{item.name}</a>
                  </Link>
                </li>))}
               </>
               ) : (
                  <div></div>
               )
              }
             </ul>
          </nav>
       </div>
       
       <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
          <div className="auth flex items-center w-full md:w-full">
             <button className="bg-white text-indigo-600  p-2 rounded border mr-4 hover:bg-gray-100 hover:text-indigo-700">
               <Link href="./login">
                  <a>Sign In</a>
               </Link>
             </button>
          </div>
       </div>
      </div>
    </nav>
  )
}

