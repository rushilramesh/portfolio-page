import Layout from "../components/Layout";
import { getCsrfToken } from "next-auth/client";
import { GetServerSideProps } from "next";



export default function SignIn({ csrfToken }) {
  return (
    <form method='post' action='/api/auth/callback/credentials'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <label>
        Username
        <input name='username' type='text'/>
      </label>
      <label>
        Password
        <input name='password' type='password'/>
      </label>
      <button type='submit'>Sign in</button>
    </form>
  )
}

// This is the recommended way for Next.js 9.3 or newer
SignIn.getInitialProps = async (context) => {
    return {
      csrfToken: await getCsrfToken(context)
    }
  }

// export default function SignIn({csrfToken}) {
    
//     return (
//         
//         <div className="h-screen flex justify-center items-start bg-gray-100">
//             <form method='post' action='/api/auth/callback/credentials' className="p-10 bg-white rounded flex flex-col justify-center text-center mt-56">
//                 <h1 className=" mb-1 text-3xl text-gray-600">Sign In</h1>
//                 <p className='mb-5 font-light'>with credentials</p>
//                 <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
//                 <div><input type="text" placeholder="email" name="Email" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"/></div>
//                 <div><input type="password" placeholder="password" name="Password" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"/></div>
//                 <button type="submit" className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80">Login</button>
//             </form>
//         </div>
//         </Layout>
//     )
     
// }



// export const getServerSideProps: GetServerSideProps = async (context)=> { 
//     return {
//         props : {
//             csrfToken: await getCsrfToken(context)
//         }
//     }
// }

