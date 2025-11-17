import Image from "next/image";

export default function Artwork({ name, title, artwork }) {
  return (
    <>
      <p>{name}</p>
      <p>{title}</p>
      <Image src={artwork} alt={title} width={140} height={230}></Image>
    </>
  );
}
