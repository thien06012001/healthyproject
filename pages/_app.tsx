import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import { FirebaseAuthProvider } from '../context/FirebaseAuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return  <FirebaseAuthProvider><Provider store={store}><Component {...pageProps} /></Provider></FirebaseAuthProvider>
  
}

export default MyApp
