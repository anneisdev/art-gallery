import Spotlight from "@/components/Spotlight";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function HomePage({ favorites, onFavorite }) {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );
  const [randomArt, setRandomArt] = useState(null);

  //had to use useeffect otherwise new random art would be rendered upon fav button click
  useEffect(() => {
    if (!randomArt && data) {
      function getRandomArtwork() {
        const index = Math.floor(Math.random() * data.length);

        return data[index];
      }

      setRandomArt(getRandomArtwork());
    }
  }, [data, randomArt]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!randomArt) {
    return null;
  }

  return (
    <div>
      <h1>Welcome to our Art Gallery 🎨</h1>
      <Spotlight
        artist={randomArt.artist}
        title={randomArt.name}
        artwork={randomArt.imageSource}
        slug={randomArt.slug}
        favorites={favorites}
        onFavorite={onFavorite}
      />
    </div>
  );
}
