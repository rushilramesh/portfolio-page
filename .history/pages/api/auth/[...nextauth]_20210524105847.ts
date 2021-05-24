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
                email : {name: 'email', type: 'text'},
                password: {name: 'password', type: 'password'}
            },

            authorize: async credentials => {
                if (correctCredentials(credentials)) {
                    const user = { id: 1, cred: credentials, name: 'Admin'}
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            },
        })
    ],

    

    jwt: {
        encryption: true,
        secret: process.env.SECRET,
      },
}

export default (req, res) => NextAuth(req, res, options)