import Image from "next/image";

export default function ArtworkList({ artist, title, artwork }) {
  return (
    <>
      <li>
        <p>{artist}</p>
        <p>{title}</p>
        <Image src={artwork} alt={title} width={140} height={230}></Image>
      </li>
    </>
  );
}
