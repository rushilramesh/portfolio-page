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
                    const user = { usernae: credentials.email, }

                }
            }
        })
    ]
}