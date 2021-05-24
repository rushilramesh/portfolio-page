import Nav from './Nav'
import Footer from './Footer'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const Layout = ({children, loggedIn} : {children: React.ReactNode, loggedIn?: boolean}) => {
    return (
        <div className="flex flex-col width-screen h-screen">
            <header>
                <Nav />
            </header>
            <div className="container mx-auto mb-488 text-center">
                <main>{children}</main>
            </div>
            
            <Footer />
        </div>
    )   
} 

export default Layout;

