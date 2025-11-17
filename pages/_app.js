import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  async function fetcher(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return (
    <>
      <Layout>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <GlobalStyle />
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  );
}
