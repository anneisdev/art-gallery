import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Colors } from "./Colors";


export function ArtworkDetails({ artwork}) {

  return (
    <Main>
      <div>
        <StyledLink href="/Gallery">🔙</StyledLink>
      </div>
      <Image
        src={artwork.imageSource}
        alt={artwork.name}
        width={240}
        height={330}
      />

      <Colors artwork={artwork} colors={artwork.colors}/>


      <h3>{artwork.name}</h3>
      <h4>{artwork.artist}</h4>

      <p>Genre: {artwork.genre}</p>
      <p>Year: {artwork.year}</p>

    </Main>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
`;

const Main = styled.main`
  margin: 1rem;
`;
