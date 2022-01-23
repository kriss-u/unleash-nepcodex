import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const FlagProvider = dynamic(() => import("@unleash/proxy-client-react"), {
  ssr: false,
});
const config = {
  url: process.env.NEXT_PUBLIC_UNLEASH_PROXY_URL,
  clientKey: process.env.NEXT_PUBLIC_APP_SECRET,
  refreshInterval: 15,
  appName: "web",
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || "development",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FlagProvider config={config}>
      <Component {...pageProps} />
    </FlagProvider>
  );
}

export default MyApp;
