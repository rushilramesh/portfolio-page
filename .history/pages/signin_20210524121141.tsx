import Layout from "../components/Layout";
import { getCsrfToken } from "next-auth/client";
import { GetServerSideProps } from "next";
import { getSession, providers, signIn, csrfToken } from "next-auth/client";



const SignIn = () => {
    
    return (
        <Layout>
        <div className="h-screen flex justify-center items-start bg-gray-100">
            <form method='post' action='/api/auth/callback/credentials' className="p-10 bg-white rounded flex flex-col justify-center text-center mt-56">
                <p className="mb-5 text-3xl text-gray-600">Sign In</p>
                <div><input type="email" placeholder="email" name="email" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"/></div>
                <div><input type="password" placeholder="password" name="password" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"/></div>
                <button type="submit" className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80">Login</button>
            </form>
        </div>
        </Layout>
    )
     
}

SignIn.getInitialProps = async(context) => {
    const {req,res} = context
    const session = await getSession({req})

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: '/'
        })
        res.end();
        return;
    }
    return {
        session: undefined,
        providers: await providers(),
        csrfToken: await csrfToken(context)
    }
}
export default SignIn;

export const getServerSideProps: GetServerSideProps = async (ctx)=> { 
    return {
        props : {
            csrfToken: await getCsrfToken(ctx)
        }
    }
}