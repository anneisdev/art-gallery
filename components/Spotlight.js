import ArtworkPreview from "./Artworkpreview";

export default function Spotlight({ artist, title, artwork }) {
  return <ArtworkPreview artist={artist} title={title} artwork={artwork} />;
}
