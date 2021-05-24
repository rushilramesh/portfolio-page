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
        <footer className="bg-white border-t border-gray-400 shadow mb-16">
            <div className="container max-w-4xl mx-auto flex py-8">
                <div className="flex w-full md:w-1/2 ">
                    <div className="px-8">
                        <h3 className="font-bold text-gray-900">About</h3>
                        <p className="py-4 text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                        </p>
                    </div>
				</div>

                <div className="flex w-full md:w-1/2">
					<div className="px-8">
						<h3 className="font-bold text-gray-900">Social</h3>
						<div className="container flex flex-row">
                            <SocialIcon network="twitter" bgColor="#ff5a01" />
                            <SocialIcon network="facebook" />
                            <SocialIcon network="linkedin" />
                            <SocialIcon network="github" />
                        </div>
					</div>
				</div>
            </div>
        </footer>
        </div>
    )   
} 

export default Layout;

