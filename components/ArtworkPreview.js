import Image from "next/image";
import Link from "next/link";
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
export default function ArtworkPreview({ artist, title, artwork, slug }) {
  return (
    <>
      <p>{artist}</p>
      <p>{title}</p>
      <Link href={`/art/${slug}`}>
        <Image src={artwork} alt={title} width={140} height={230}></Image>
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        slug={slug}
        onClick={() => onFavorite(slug)}
      />
    </>
  );
}
