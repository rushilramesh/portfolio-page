
import { useRouter } from "next/router"
import useSWR from 'swr' 

const router = useRouter()

export const useUser = async ()  => {
   const user =  useSWR('/api/user')

   if (!user) return

   const status : Boolean = user.data.signedIn

   return { 
      status,
      ...user
   } 
}

// export const signInState = async () => {
//     const user = await fetch('http://localhost:3000/api/user').then(res => res.json()).catch(err => console.log(err))
//     return user.signedIn
// }

// export const changeStatus = async () => {
//     const status = signInState()
//     await fetch('http://localhost:3000/api/user' , 
//     {
//         method: 'CHANGE',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(!status)
//     }).then(res => {
//         if(res.ok) {
//             router.push('/')
//         }
//     }).catch(error => console.error(error))
// }
