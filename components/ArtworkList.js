import Image from "next/image";
import ArtworkPreview from "./Artworkpreview";

export default function ArtworkList({ artist, title, artwork, onFavorite }) {
  return (
    <>
      <li>
        <ArtworkPreview artist={artist} title={title} artwork={artwork} onFavorite={onFavorite}></ArtworkPreview>
      </li>
    </>
  );
}
