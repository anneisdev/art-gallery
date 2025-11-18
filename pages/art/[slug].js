import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
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
    <main>
  <Link href="/Gallery">←</Link>
  
      <Image
        src={artwork.imageSource}
        alt={artwork.name}
        width={240}
        height={330}
      />

            <h3>{artwork.name}</h3>
            <h4>{artwork.artist}</h4>

      <p>Genre: {artwork.genre}</p>
      <p>Year: {artwork.year}</p>

    </main>
  );
}
