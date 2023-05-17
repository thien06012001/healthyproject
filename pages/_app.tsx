import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { FirebaseAuthProvider } from "../context/FirebaseAuthContext";
import CrispChatbot from "../components/CrispChatbot";
import { ToastProvider } from "@apideck/components";

function MyApp({ Component, pageProps }: AppProps) {
  const url =
  'https://www.socialintents.com/api/socialintents.1.3.js#2c9fab3588226f81018827b31f8a0597';
  return (
    <FirebaseAuthProvider>
      <Provider store={store}>
        <ToastProvider>
          <Component {...pageProps} />
          {/* <CrispChatbot /> */}
          <script src={url} async />
        </ToastProvider>
      </Provider>
    </FirebaseAuthProvider>
  );
}

export default MyApp;
