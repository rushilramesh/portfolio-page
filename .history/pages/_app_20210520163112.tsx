import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  let loggedIn: boolean = false;  

  return (
    
      <Component {...pageProps} />
    
  )

}

export default MyApp
