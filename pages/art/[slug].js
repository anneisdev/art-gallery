import { ArtworkDetails } from "@/components/ArtworkDetails";
import { useRouter } from "next/router";
import useSWR from "swr";



export default function ArtDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (!slug || isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Not found</h1>;
  }

  const artwork = data.find((art) => art.slug === slug);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  }

  return (


<ArtworkDetails artwork={artwork} colors={artwork.colors}/>
  );
}

