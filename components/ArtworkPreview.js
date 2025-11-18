import Image from "next/image";
import Link from "next/link";

export default function ArtworkPreview({ artist, title, artwork, slug }) {
  return (
    <>
      <p>{artist}</p>
      <p>{title}</p>
      <Link href={`/art/${slug}`}>
        <Image src={artwork} alt={title} width={140} height={230}></Image>
      </Link>
    </>
  );
}
