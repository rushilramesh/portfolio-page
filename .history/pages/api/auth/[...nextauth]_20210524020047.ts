import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const credentials = credentials => (
    credentials.username === process.env.NEXTAUTH_USERNAME &&
    credentials.password === process.env.NEXTAUTH_USERNAME
)