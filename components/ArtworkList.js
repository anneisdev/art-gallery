import ArtworkPreview from "./ArtworkPreview";
import styled from "styled-components";

export default function ArtworkList({ artists, favorites, onFavorite }) {
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
                favorites={favorites}
                onFavorite={onFavorite}
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