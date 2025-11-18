import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtworkPreview({ artist, title, artwork, onFavorite }) {
  return (
    <>
      <p>{artist}</p>
      <p>{title}</p>
      <Image src={artwork} alt={title} width={140} height={230}></Image>
      <FavoriteButton onFavorite={onFavorite}></FavoriteButton>
    </>
  );
}
