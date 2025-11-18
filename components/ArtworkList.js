import ArtworkPreview from "./ArtworkPreview";

export default function ArtworkList({ artists, favorites, onFavorite }) {
  return (
    <>
      <ul>
        {artists.map((artwork) => {
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
    </>
  );
}
