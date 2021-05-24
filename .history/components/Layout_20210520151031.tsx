import Nav from './Nav'
import utilStyles from '../styles/utils.module.css'

const Layout = ({children, loggedIn} : {children: React.ReactNode, loggedIn: boolean}) => {
    return (
        <>
        <Nav {...loggedIn}></Nav>/
        <div className="w-full h-full bg-main-background">
            <h1 className="text-center"></h1>
            <main>{children}</main>
        </div>
        </>
    )   
} 

export default Layout;