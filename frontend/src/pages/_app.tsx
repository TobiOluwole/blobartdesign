import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/store/provider";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        if (!router.pathname.startsWith("/admin/")) {
            // Dynamically import styles
            // import("@/styles/web/plugins.css");
            import("@/styles/web/custom.css");

            // Dynamically including scripts
        }
    }, [router.pathname]);
    return (
      <>
          <ReduxProvider>
            <Toaster position="top-right" />
            <Component {...pageProps} />
          </ReduxProvider>
      </>
  );
}
