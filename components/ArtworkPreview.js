import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtworkPreview({
  artist,
  title,
  artwork,
  favorites = [],
  onFavorite,
  slug,
}) {
  const isFavorite = favorites.find((favSlug) => favSlug === slug)
    ? true
    : false;

  return (
    <>
      <h2>{artist}</h2>
      <P>{title}</P>
      <Link href={`/art/${slug}`}>
        <Image src={artwork} alt={title} width={240} height={330}></Image>
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        slug={slug}
        onClick={() => onFavorite(slug)}
      />
    </>
  );
}

const P = styled.p`
color: #696969ff;
`
