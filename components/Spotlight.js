import ArtworkPreview from "./ArtworkPreview";

export default function Spotlight({
  artist,
  title,
  artwork,
  favorites,
  onFavorite,
  slug,
}) {
  return (
    <ArtworkPreview
      artist={artist}
      title={title}
      artwork={artwork}
      favorites={favorites}
      onFavorite={onFavorite}
      slug={slug}
    />
  );
}
