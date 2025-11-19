export function Colors({ colors }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            display: "flex",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}
