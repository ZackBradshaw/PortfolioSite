import "../styles/variables.scss";
import "../styles/Layout.scss";
import "../styles/NavBar.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
