const { render, screen } = require("@testing-library/react");
const { default: Spotlight } = require("./Spotlight");

const testArtwork1 = {
  artist: "Artist one",
  name: "Artwork blue",
  imageSource: "/blue.png",
  slug: "artwork-blue",
};

const testArtwork2 = {
  artist: "Artist two",
  name: "Artwork red",
  imageSource: "/red.png",
  slug: "artwork-red",
};

test("renders spotlight component with some content", () => {
  render(
    <Spotlight
      artist={testArtwork1.artist}
      title={testArtwork1.name}
      artwork={testArtwork1.imageSource}
      favorites={[]}
      onFavorite={() => {}}
      slug={testArtwork1.slug}
    />
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders spotlight component but withdifferent content when re-rendered with new props", () => {
  const { rerender } = render(
    <Spotlight
      artist={testArtwork1.artist}
      title={testArtwork1.name}
      artwork={testArtwork1.imageSource}
      favorites={[]}
      onFavorite={() => {}}
      slug={testArtwork1.slug}
    />
  );

  const firstImage = screen.getByRole("img");
  const firstAlt = firstImage.getAttribute("alt");
  const firstSrc = firstImage.getAttribute("src");

  rerender(
    <Spotlight
      artist={testArtwork2.artist}
      title={testArtwork2.name}
      artwork={testArtwork2.imageSource}
      favorites={[]}
      onFavorite={() => {}}
      slug={testArtwork2.slug}
    />
  );

  const secondImage = screen.getByRole("img");
  const secondAlt = secondImage.getAttribute("alt");
  const secondSrc = secondImage.getAttribute("src");

  expect(secondAlt).not.toEqual(firstAlt);
  expect(secondSrc).not.toEqual(firstSrc);
});
