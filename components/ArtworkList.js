import ArtworkPreview from "./ArtworkPreview";


export default function ArtworkList({ artists }) {
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
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
