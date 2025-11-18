import ArtworkPreview from "@/components/ArtworkPreview";
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
    return <h1>{error}</h1>;
  }

  const favoritedArtworks = artworks.filter((artwork) =>
    favorites.find((favSlug) => favSlug === artwork.slug)
  );

  return (
    <div>
      {favoritedArtworks.length === 0 && <h1>Hello from Next.js</h1>}
      <ul>
        {favoritedArtworks.map((artwork) => {
          return (
            <li key={artwork.slug}>
              <ArtworkPreview
                artist={artwork.artist}
                title={artwork.name}
                artwork={artwork.imageSource}
                slug={artwork.slug}
                favorites={favorites}
                onFavorite={onFavorite}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
