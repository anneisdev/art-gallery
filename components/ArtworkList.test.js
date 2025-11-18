import { render, screen } from "@testing-library/react";
import ArtworkList from "../components/ArtworkList";

const testArtWorks = [
  {
    artist: "Artist one",
    name: "Artwork blue",
    imageSource: "/blue.png",
    slug: "artwork-blue",
  },
  {
    artist: "Artist two",
    name: "Artwork red",
    imageSource: "/red.png",
    slug: "artwork-red",
  },
];

test("renders list of artworks", () => {
  render(
    <ArtworkList artists={testArtWorks} favorites={[]} onFavorite={() => {}} />
  );

  expect(screen.getByText("Artist one")).toBeInTheDocument();
  expect(screen.getByText("Artwork red")).toBeInTheDocument();
  expect(screen.getAllByRole("img")).toHaveLength(2);
});
