import Nav from './Nav'
import Footer from './Footer'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Layout = ({children, loggedIn} : {children: React.ReactNode, loggedIn?: boolean}) => {
    return (
        <div className="flex flex-col width-screen height-screen">
        <Nav />
        <div className="container mx-auto text-center">
            <main>{children}</main>
        </div>
        <Footer />
        </div>
    )   
} 

export default Layout;

