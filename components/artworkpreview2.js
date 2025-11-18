import Image from "next/image";

export default function ArtworkPreview({ artist, title, artwork }) {
  return (
    <>
      <p>{artist}</p>
      <p>{title}</p>
      <Image src={artwork} alt={title} width={140} height={230}></Image>
    </>
  );
}
