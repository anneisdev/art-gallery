import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  function getRandomArtwork() {
    const index = Math.floor(Math.random() * data.length);

    return data[index];
  }

  const randomArt = getRandomArtwork();

  return (
    <div>
      <h1>Welcome to our Art Gallery 🎨</h1>
      <Spotlight
        artist={randomArt.artist}
        title={randomArt.name}
        artwork={randomArt.imageSource}
      />
    </div>
  );
}
