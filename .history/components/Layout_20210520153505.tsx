import Nav from './Nav'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Layout = ({children, loggedIn, blog} : {children: React.ReactNode, loggedIn: boolean, blog: boolean}) => {
    return (
        <>
        <Nav {...loggedIn}></Nav>/
        <div className="w-full h-full bg-main-background">
            <h1 className="text-center"></h1>
            <main>{children}</main>
            {blog && (
                <div className="mt-12">
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
        </div>
        </>
    )   
} 

export default Layout;