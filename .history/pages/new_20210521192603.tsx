import Layout from "../components/Layout"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from "next";

const New = ({
    user
} : {
    user : {
        name: string,
        email: string
    }
}) => {
    const [form, setForm] = useState({ title: '', body: '', user: { name: user.name, status: 'author'}, date: Date()})
    const router = useRouter();

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name] : event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form)
        //createPost();

    }

    const createPost = async () => {
        await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then( res => {
            if (res.ok) {
                router.push('/')
            }
        }).catch(error => console.error(error))
    }

    return (
        <Layout>
            
            <div className="py-12 w-8/12 mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b text-justify border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="container flex-col mb-4">
                                <label className="text-xl text-justify">Title</label>
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" placeholder="Title "id="title" onChange={handleChange}></input>
                            </div>
                            <div className="mb-8">
                                <label className="text-xl text-justify">Content</label>
                                <textarea className="shadow form-textarea mt-1 block border-2 border-gray-300 p-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48" name="body" placeholder="My Thoughts..." onChange={handleChange}></textarea>
                            </div>

                            <div className="flex p-1">
                                <button role="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default New

export const getStaticProps : GetStaticProps = async () => {
   const res = await fetch('http://localhost:3000/api/user')
   const user = await res.json()

   return {
       props : {
           user
       }
   }
   
}