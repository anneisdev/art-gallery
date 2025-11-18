export function RenderColors(artwork) {
    {artwork.colors.map((color) => (
    <div
      key={color}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: color,
        border: "1px solid #ccc"
      }}
    />
  ))}
}