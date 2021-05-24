
import { useRouter } from "next/router"
import useSWR from 'swr' 



export const useUser =  ()  => {
   
   const {data: user} =  useSWR('/api/user')
   

   if (!user) return
   

   const status : boolean = user.signedIn

   return { 
      status,
      ...user
   }
}

