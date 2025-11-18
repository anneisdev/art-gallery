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
    <>
      <p>Artist: {artist}</p>
      <p>Artwork name: {title}</p>
      <Image src={artwork} alt={title} width={240} height={330}></Image>
    </>
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
