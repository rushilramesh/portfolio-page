import Layout from "../components/Layout"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from "next";
import matter from "gray-matter";
import { server } from "../config";


const New = ({
    user
} : {
    user : {
        name: string,
        email: string

    }
}) => {
    const [form, setForm] = useState({ title: '', description: '', body: '', user: { name: user.name, status: 'author'}, date: Date()})
    const router = useRouter();

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
        
    };

    const setBodyToHtml = () => {
        setForm({
            ...form,
            body: matter.stringify(form.body, {title: form.title})
        })
    }

    const handleSubmit = event => {
        setBodyToHtml()
        event.preventDefault();
        createPost();

    }

    const createPost = async () => {
        await fetch('/api/users', {
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
                    <h1 className=" text-4xl mb-4">Create Post </h1>
                    <div className="p-6 bg-white border-b text-justify border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="container flex-col mb-4">
                                <label className="text-xl text-justify">Title</label>
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" placeholder="Title "id="title" onChange={handleChange}></input>
                            </div>
                            <div className="container flex-col mb-4">
                                <label className="text-xl text-justify">Description</label>
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" placeholder="About the post"id="description" onChange={handleChange}></input>
                            </div>
                            <div className="mb-8">
                                <label className="text-xl text-justify">Content</label>
                                <textarea className="shadow form-textarea mt-1 block border-2 border-gray-300 p-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48" name="body" placeholder="My Thoughts..." onChange={handleChange}></textarea>
                            </div>

                            <div className="flex p-1">
                                <button role="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400">Submit</button>
                                <div className="container text-right text-gray-600">
                                     Written By
                                    <p className="text-sm">{user.name}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const res = await fetch(`${server}/api/user`, {method: 'GET'})
    const user = await res.json() 
    
    return {
        props : {
            user
        }    
    }
}


export default New


