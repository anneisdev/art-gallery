import ArtworkPreview from "./ArtworkPreview";
import styled from "styled-components";

export default function ArtworkList({ artists }) {
  return (
    <>
      <ul>
        {artists.map((artwork) => {
          return (
            <Li key={artwork.slug}>
              <ArtworkPreview
                artist={artwork.artist}
                title={artwork.name}
                artwork={artwork.imageSource}
                slug={artwork.slug}
              />
            </Li>
          );
        })}
      </ul>
    </>
  );
}


const Li = styled.li`
list-style: none
`