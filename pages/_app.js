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

  function handleFavoriteArtwork(slug) {
    const currentArtwork = favorites.find((favSlug) => favSlug === slug);

    if (currentArtwork) {
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
            onFavorite={handleFavoriteArtwork}
          />
        </SWRConfig>
      </Layout>
    </>
  );
}
