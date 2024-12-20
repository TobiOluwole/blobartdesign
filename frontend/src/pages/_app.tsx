import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/store/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <ReduxProvider>
            <Toaster position="top-right" />
            <Component {...pageProps} />
          </ReduxProvider>
      </>
  );
}
