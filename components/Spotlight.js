import Image from "next/image";

export default function Spotlight({ artist, title, artwork }) {
  return (
    <>
      <p>Artist: {artist}</p>
      <p>Artwork name: {title}</p>
      <Image src={artwork} alt={title} width={140} height={230}></Image>
    </>
  );
}
