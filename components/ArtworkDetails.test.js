import { render, screen } from "@testing-library/react";
import { ArtworkDetails } from "./ArtworkDetails";

const testArtwork1 = {
  artist: "Artist one",
  name: "Artwork blue",
  imageSource: "/blue.png",
  slug: "artwork-blue",
  colors: ["#000000", "#FFFFFF"],
  genre: "Baroque",
  year: "1642",
};

test("renders all artwork details", () => {
  render(
    <ArtworkDetails
      artwork={testArtwork1}
      isFavorite={false}
      slug={testArtwork1.slug}
      onFavorite={() => {}}
    />
  );

  expect(screen.getByText("Artist one")).toBeInTheDocument();
  expect(screen.getByText("Artwork blue")).toBeInTheDocument();
  expect(screen.getByText(/Genre:/)).toHaveTextContent("Genre: Baroque");
  expect(screen.getByText(/Year:/)).toHaveTextContent("Year: 1642");
  expect(screen.getByRole("img")).toHaveAttribute("alt", "Artwork blue");
});
