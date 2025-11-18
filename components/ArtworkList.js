import ArtworkPreview from "./ArtworkPreview";

export default function ArtworkList({ artist, title, artwork }) {
  return (
    <>
      <li>
        <ArtworkPreview
          artist={artist}
          title={title}
          artwork={artwork}
        ></ArtworkPreview>
      </li>
    </>
  );
}
