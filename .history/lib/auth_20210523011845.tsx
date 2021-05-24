import { sign } from "crypto"
import router, { useRouter } from "next/router"
const router = useRouter()

export const auth = async (email, password) => {
   const res = await fetch('http://localhost:3000/api/user')
   
}

export const signInState = async () => {
    const user = await fetch('http://localhost:3000/api/user').then(res => res.json()).catch(err => console.log(err))
    return user.signedIn
}

export const changeStatus = async () => {
    const status = signInState()
    await fetch('http://localhost:3000/api/user' , 
        {
            method: 'CHANGE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(!status)
        }).then
}
