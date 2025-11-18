import ArtworkList from "@/components/ArtworkList";
import useSWR from "swr";

export default function Gallery() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ArtworkList artists={data}/>
    </div>
  );
}
