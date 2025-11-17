import Image from "next/image";
import ArtworkPreview from "./Artworkpreview";

export default function ArtworkList({ artist, title, artwork }) {
  return (
    <>
      <li>
        <ArtworkPreview artist={artist} title={title} artwork={artwork}></ArtworkPreview>
      </li>
    </>
  );
}
