import Image from "next/image";
import Link from "next/link";

export default function ArtworkPreview({ artist, title, artwork }) {
  return (
    <>

      <p>{artist}</p>
      <p>{title}</p>
            <Link href="/details">
      <Image src={artwork} alt={title} width={140} height={230}></Image>
</Link>
    </>
  );
}
