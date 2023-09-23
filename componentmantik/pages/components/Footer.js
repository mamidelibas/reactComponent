export default function Footer({ gonderilecekHayvan }) {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        width: "100%",
        fontSize: "20px",
      }}
    >
      <h3>Footer</h3>
      <p>{gonderilecekHayvan.length}</p>
    </div>
  );
}
