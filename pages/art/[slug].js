import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


export default function ArtDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (!slug || isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Not found</h1>;
  }

  const artwork = data.find((art) => art.slug === slug);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  }

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

<div style={{ display: "flex", gap: "10px" }}>
    {artwork.colors.map((color) => (
    <div
      key={color}
      style={{
        display: "flex",
        gap: "4rem", 
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  ))}
  </div>

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

