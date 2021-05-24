import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const correctCredentials = credentials => (
    credentials.username === process.env.NEXTAUTH_USERNAME &&
    credentials.password === process.env.NEXTAUTH_USERNAME
)

const options = {
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                email : {label: 'email', type: 'email'},
                password: {label: 'password', type: 'password'}
            },

            authorize: async credentials => {
                if (correctCredentials(credentials)) {
                    const user = { id: credentials, name: 'Admin'}
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            },
        })
    ],

    pages: {
        signIn: '/pages/login',
        signOut: '/',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: null // If set, new users will be directed here on first sign in
    }
}

export default (req, res) => NextAuth(req, res, options)