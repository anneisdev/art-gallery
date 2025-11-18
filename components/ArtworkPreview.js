import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtworkPreview({ artist, title, artwork, slug }) {
  return (
    <>
      <h2>{artist}</h2>
      <P>{title}</P>
      <Link href={`/art/${slug}`}>
        <Image src={artwork} alt={title} width={240} height={330}></Image>
      </Link>
    </>
  );
}

const P = styled.p`
color: #696969ff;
`
