export function Colors({ colors}) {
  return (
          <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              display: "flex",
              gap: "4rem",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        ))}
      </div>
  )
}