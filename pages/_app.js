import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);

  async function fetcher(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  function handleToggleFavorite(slug) {
    const isFavorite = favorites.find((favSlug) => favSlug === slug);

    if (isFavorite) {
      setFavorites(favorites.filter((favSlug) => favSlug !== slug));
    } else {
      setFavorites([...favorites, slug]);
    }
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
          <Component
            {...pageProps}
            favorites={favorites}
            onFavorite={handleToggleFavorite}
          />
        </SWRConfig>
      </Layout>
    </>
  );
}
