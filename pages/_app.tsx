import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { FirebaseAuthProvider } from "../context/FirebaseAuthContext";
import CrispChatbot from "../components/CrispChatbot";
import { ToastProvider } from "@apideck/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAuthProvider>
      <Provider store={store}>
        <ToastProvider>
          <Component {...pageProps} />
          <CrispChatbot />
        </ToastProvider>
      </Provider>
    </FirebaseAuthProvider>
  );
}

export default MyApp;
