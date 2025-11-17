import Artwork from "@/components/Artworklist";
import useSWR from "swr";

export default function HomePage() {
  async function fetcher(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    if (!response.ok) {
      throw error;
    }

    return data;
  }

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  console.log(data);

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ul>
        {data.map((artwork) => {
          return (
            <li key={artwork.slug}>
              <Artwork
                name={artwork.artist}
                title={artwork.name}
                artwork={artwork.imageSource}
              ></Artwork>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
