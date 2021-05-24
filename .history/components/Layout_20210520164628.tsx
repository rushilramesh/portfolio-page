import Nav from './Nav'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Layout = ({children, loggedIn} : {children: React.ReactNode, loggedIn?: boolean}) => {
    return (
        <>
        <Nav />
        <div className="container mx-auto text-center">
            <main>{children}</main>
        </div>
        </>
    )   
} 

export default Layout;

// {blog && (
//     <div className="mt-12">
//     <Link href="/">
//         <a>← Back to home</a>
//     </Link>
//     </div>
// )}