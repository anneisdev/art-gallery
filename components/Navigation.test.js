import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("renders navigation links correctly", () => {
  render(
    <Layout>
      <div>Test Content</div>
    </Layout>
  );

  expect(screen.getByText("Spotlight")).toHaveAttribute("href", "/");
  expect(screen.getByText("Gallery")).toHaveAttribute("href", "/Gallery");
  expect(screen.getByText("Favorites")).toHaveAttribute("href", "/favorites");
});
