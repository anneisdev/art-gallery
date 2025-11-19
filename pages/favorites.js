import ArtworkList from "@/components/ArtworkList";
import ArtworkPreview from "@/components/ArtworkPreview";
import styled from "styled-components";
import useSWR from "swr";

export default function FavoritesPage({ favorites, onFavorite }) {
  const {
    data: artworks,
    error,
    isLoading,
  } = useSWR(`https://example-apis.vercel.app/api/art`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const favoritedArtworks = artworks.filter((artwork) =>
    favorites.find((favSlug) => favSlug === artwork.slug)
  );

  return (
    <div>
      {favoritedArtworks.length === 0 && <h1>Here you can find your favorite pieces 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= "2.5rem"
      height="2.5rem"
      viewBox="-5 -8 30 30"
      fill= "#f89393ff"
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
    </h1>}
      <ul>
        {favoritedArtworks.map((artwork) => {
          return (
            <Li key={artwork.slug}>
              <ArtworkPreview
                artist={artwork.artist}
                title={artwork.name}
                artwork={artwork.imageSource}
                slug={artwork.slug}
                favorites={favorites}
                onFavorite={onFavorite}
              />
            </Li>
          );
        })}
      </ul>
      {favoritedArtworks.length === 0 && <h1>No favorited artworks yet</h1>}
      <ArtworkList
        artworks={favoritedArtworks}
        favorites={favorites}
        onFavorite={onFavorite}
      />
    </div>
  );
}
