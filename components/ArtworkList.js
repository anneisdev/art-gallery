import ArtworkPreview from "./Artworkpreview";
import Link from "next/link";

export default function ArtworkList({ artist, title, artwork }) {
  return (
    <li>
      <Link href="/details">
        <ArtworkPreview
          artist={artist}
          title={title}
          artwork={artwork}
        ></ArtworkPreview>
      </Link>
    </li>
  );
}
