import ArtworkPreview from "./ArtworkPreview";
import styled from "styled-components";

export default function ArtworkList({ artworks, favorites, onFavorite }) {
  return (
    <>
      <Ul>
        {artworks.map((artwork) => {
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
      </Ul>
    </>
  );
}


const Li = styled.li`
list-style: none
`

const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 6rem;
`