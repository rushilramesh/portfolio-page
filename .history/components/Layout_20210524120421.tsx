import Nav from './Nav'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

const Layout = ({children, home, blog} : {children: React.ReactNode, home?: boolean, blog?: boolean}) => {
    return (
        <div className={!blog ? ("flex flex-col width-screen h-screen") : ("bg-gradient-to-r from-green-200 via-green-200 to-blue-200 bg-repeat-y flex flex-col width-screen h-full")} >
            <header>
                <Nav />
            </header>
            <div className="container mx-auto mb-488 text-center">
                <main>{children}</main>
            </div>
            
            <footer  className= {(home) ? " fixed bottom-0 bg-black border-t w-full border-gray-400 shadow text-gray-50 h-40" : "  bg-black border-t border-gray-400 shadow text-gray-50 "}>
            <div className="container max-w-4xl mx-auto flex py-8 ">
                <div className="flex w-full md:w-7/12 ">
                    <div className="px-8">
                        <h3 className="font-bold text-gray-50">About</h3>
                        <p className="py-4 text-gray-50 text-sm">
                            Hello, Rushil here!
                            <br/>
                            email: rushilramesh@abc.com
                        </p>
                    </div>
				</div>

                <div className="flex w-full md:w-1/2 ">
					<div className="px-8">
						<h3 className="font-bold -mb-4 text-gray-50">Contact Me</h3>
						<div className="container justify-center inline-flex mt-8 space-x-4 ">
                            <a href='https://twitter.com/?lang=en'><SocialIcon network="twitter" /></a>
                            <a href='https://www.facebook.com/'><SocialIcon network="facebook" /></a>
                            <a href='https://www.linkedin.com/in/rushil-ramesh-2a8404209/'><SocialIcon network="linkedin" /></a>
                            <a href='https://github.com/rushilramesh'><SocialIcon network="github" /></a>
                        </div>
					</div>
				</div>
            </div>
        </footer>
        </div>
    )   
} 

export default Layout;

