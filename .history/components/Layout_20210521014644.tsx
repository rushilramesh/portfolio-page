import Nav from './Nav'
import Footer from './Footer'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Layout = ({children, loggedIn} : {children: React.ReactNode, loggedIn?: boolean}) => {
    return (
        <>
        <Nav />
        <div className="container mx-auto text-center">
            <main>{children}</main>
        </div>
        <Footer />
        </>
    )   
} 

export default Layout;

