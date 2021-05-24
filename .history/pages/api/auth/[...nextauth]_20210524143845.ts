import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const correctCredentials = credentials => (
    credentials.email=== process.env.NEXTAUTH_EMAIL &&
    credentials.password === process.env.NEXTAUTH_PASSWORD
)

const options = {
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                email : {label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },

            async authorize(credentials) {
                
                if (correctCredentials(credentials)) {
                    const user = { id: 1, name: 'Admin'}
                    return Promise.resolve(user)
                } else {
                    alert('wrong password!')
                    return Promise.resolve(null)
                }
            },
        })
    ],
    session: {
        jwt: true
    },
    pages: {
        signIn: '/signin',
        signOut: '/'
    },
    
    
}

export default (req, res) => NextAuth(req, res, options)