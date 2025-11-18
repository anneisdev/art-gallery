const { render, screen } = require("@testing-library/react");
const { default: ArtworkPreview } = require("./ArtworkPreview");

const testArtwork1 = {
  artist: "Artist one",
  title: "Artwork blue",
  imageSource: "/blue.png",
  slug: "artwork-blue",
};

test("renders artist and title from artworkpreview component", () => {
  render(
    <ArtworkPreview
      artist={testArtwork1.artist}
      title={testArtwork1.title}
      artwork={testArtwork1.imageSource}
      favorites={[]}
      onFavorite={() => {}}
      slug={testArtwork1.slug}
    />
  );
  expect(screen.getByText("Artist one")).toBeInTheDocument();
  expect(screen.getByText("Artwork blue")).toBeInTheDocument();
});

test("renders image and slug from artworkpreview component", () => {
  render(
    <ArtworkPreview
      artist={testArtwork1.artist}
      title={testArtwork1.title}
      artwork={testArtwork1.imageSource}
      favorites={[]}
      onFavorite={() => {}}
      slug={testArtwork1.slug}
    />
  );
  const image = screen.getByRole("img");

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("alt", "Artwork blue");
});
