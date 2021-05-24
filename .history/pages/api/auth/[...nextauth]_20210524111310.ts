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

            authorize: async credentials => {
                if (correctCredentials(credentials)) {
                    const user = { id: 1, name: 'Admin'}
                    return user
                } else {
                    return null
                }
            },
        })
    ],

    session: {
        jwt: true
    },

    jwt: {
        encryption: true,
        secret: process.env.SECRET,
      },
}

export default (req, res) => NextAuth(req, res, options)