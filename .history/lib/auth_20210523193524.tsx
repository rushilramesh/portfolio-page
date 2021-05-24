import useSWR from 'swr' 

import React, {useState, useEffect, useContext, createContext} from "react"
import nookies from "nookies"
import firebaseClient from "./firbaseClient"
import firebase from "firebase"
import { verifyIdToken } from './firebaseAdmin'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
   firebaseClient()
   const[user, setUser] = useState(null)
   
   useEffect(() => {
      return firebase.auth().onIdTokenChanged(async (usr) => {
         if (!usr) {
            setUser(null)
            nookies.set(undefined, "token", "", {})
            return
         }
         const token = await usr.getIdToken()
         setUser(usr)
         nookies.set(undefined,"token", token, {})

      })
   }, []) 

   return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)


export const checkStatus =  async (context)  => {
   try {
      const cookies = nookies.get(context)
      const token = await verifyIdToken(cookies.token)
      return { token }
   } catch (error) {
      return 
   }
   
}

