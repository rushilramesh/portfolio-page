import { GetStaticProps } from "next";
import Image from "next/image"
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer style={{ position: "relative", bottom: 0, width:"100%" }} className="bg-black border-t border-gray-400 shadow  text-gray-50 h-100" >
            <div className="container max-w-4xl mx-auto flex py-8 space-y-4ß">
                <div className="flex w-full md:w-1/2 ">
                    <div className="px-8">
                        <h3 className="font-bold text-gray-50">About</h3>
                        <p className="py-4 text-gray-50 text-sm">
                            Hi! I'm a full-stack web developer at Joni.AI!
                        </p>
                    </div>
				</div>

                <div className="flex w-full md:w-1/2 ">
					<div className="px-8">
						<h3 className="font-bold text-gray-50">Contact Me</h3>
						<div className="container justify-center inline-flex mt-8 space-x-4">
                            <a href='https://twitter.com/?lang=en' className=""><SocialIcon network="twitter" /></a>
                            <a href='https://www.facebook.com/'><SocialIcon network="facebook" /></a>
                            <a href='https://www.linkedin.com/in/rushil-ramesh-2a8404209/'><SocialIcon network="linkedin" /></a>
                            <a href='https://github.com/rushilramesh'><SocialIcon network="github" /></a>
                        </div>
					</div>
				</div>
            </div>
        </footer>
    
    )
}

