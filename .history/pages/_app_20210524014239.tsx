import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css'
import { AuthProvider } from '../lib/auth';


function MyApp({ Component, pageProps } : AppProps) {
  let loggedIn: boolean = false;  

  return (
    >
      <Component {...pageProps} />
    
    
  )

}

export default MyApp
