import { GetStaticProps } from "next";
import Image from "next/image"
import { SocialIcon } from 'react-social-icons';

export default function Footer({data} : {data : {
    name: string
    email: string
    twitter: string
    facebook: string
    linkedin: string
    github: string
}}) {
    return (
        <footer style={{ position: "relative", bottom: 0, width:"100%" }} className="bg-black border-t border-gray-400 shadow  text-gray-50 h-100" >
            <div className="container max-w-4xl mx-auto flex py-8 space-y-4ß">
                <div className="flex w-full md:w-1/2 ">
                    <div className="px-8">
                        <h3 className="font-bold text-gray-50">About</h3>
                        <p className="py-4 text-gray-50 text-sm">
                            {data.name}
                        </p>
                        <p className="py-4 text-gray-50 text-sm">
                            {data.email}
                        </p>
                    </div>
				</div>

                <div className="flex w-full md:w-1/2 ">
					<div className="px-8">
						<h3 className="font-bold text-gray-50">Contact Me</h3>
						<div className="container justify-center inline-flex mt-8 space-x-4">
                            <a href={data.twitter}><SocialIcon network="twitter" /></a>
                            <a href={data.facebook}><SocialIcon network="facebook" /></a>
                            <a href={data.linkedin}><SocialIcon network="linkedin" /></a>
                            <a href={data.github}><SocialIcon network="github" /></a>
                        </div>
					</div>
				</div>
            </div>
        </footer>
    
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const data = await fetch('http://localhost:3000/api/user').then(res => res.json())

    return {
        props: {
            data
        }
    }
}