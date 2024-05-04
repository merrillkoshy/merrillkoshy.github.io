import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps as NextAppProps } from "next/app";
import "../styles/globals.css";
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return <Component {...pageProps} />;
}
