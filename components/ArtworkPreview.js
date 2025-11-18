import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtworkPreview({ artist, title, artwork }) {
  return (
    <>
      <p>{artist}</p>
      <p>{title}</p>
      <Link href="/details">
        <Image src={artwork} alt={title} width={140} height={230}></Image>
      </Link>
      <FavoriteButton />
    </>
  );
}
