import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { FirebaseAuthProvider } from "../context/FirebaseAuthContext";
import CrispChatbot from "../components/CrispChatbot";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
        <CrispChatbot />
      </Provider>
    </FirebaseAuthProvider>
  );
}

export default MyApp;
