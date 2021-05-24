import { useState } from "react";

import { useRouter } from "next/router";
import firebaseClient from "../lib/firbaseClient";
import firebase from "firebase";
import "firebase/auth"


const LoginForm = () => {
    firebaseClient()
    const [form, setForm] = useState({email: '', password: ''})
    
    const router = useRouter()

    const handleChange = event => {
       setForm({
            ...form,     
            [event.target.name] : event.target.value})
    };

    const handleSubmit = event => {
        
        event.preventDefault();
        attemptLogin()
    }
    
    const attemptLogin = async () => {

        await firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then(() => {
                router.push('/')
            }).catch(error => window.Error(error))
        // await fetch('/api/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type' : 'application/json'},
        //     body: JSON.stringify(form)
        // }).then(res => {
        //     if (res.ok) {
        //         console.log('OK')
        //         router.push('/')
        //     }
        // }).catch(error => console.error(error))
    }

    return (
        <div className="h-screen flex justify-center items-start bg-gray-100">
            <form onSubmit={handleSubmit} className="p-10 bg-white rounded flex flex-col justify-center text-center mt-56">
                <p className="mb-5 text-3xl text-gray-600">Sign In</p>
                <div><input type="email" placeholder="username" name="username" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" onChange={handleChange}/></div>
                <div><input type="password" placeholder="password" name="password" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" onChange={handleChange}/></div>
                <button type="submit" className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80">Login</button>
            </form>
        </div>
    )
     
}

export default LoginForm;

