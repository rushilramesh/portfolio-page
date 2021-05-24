import Nav from './Nav'
import Footer from './Footer'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

const Layout = ({children, loggedIn} : {children: React.ReactNode, loggedIn?: boolean}) => {
    return (
        <div className="flex flex-col width-screen height-screen">
        <Nav />
        <div className="container mx-auto text-center">
            <main>{children}</main>
        </div>
        <footer className="bg-black border-t border-gray-400 shadow mb-16 text-gray-50">
            <div className="container max-w-4xl mx-auto flex py-8 space-y-4ß">
                <div className="flex w-full md:w-1/2 ">
                    <div className="px-8">
                        <h3 className="font-bold text-gray-50">About</h3>
                        <p className="py-4 text-gray-50 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                        </p>
                    </div>
				</div>

                <div className="flex w-full md:w-1/2 ">
					<div className="px-8">
						<h3 className="font-bold text-gray-50">Contact Me</h3>
						<div className="container inline-flex space-x-4">
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

