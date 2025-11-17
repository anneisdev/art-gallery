import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Link href="/">Spotlight</Link>
      <Link href="/Gallery">Gallery</Link>
    </>
  );
}
