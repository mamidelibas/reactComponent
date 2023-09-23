export default function TaskCreate({ systemUsers }) {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "100%",
        fontSize: "20px",
      }}
    >
      <h3>Header</h3>
      <p>{systemUsers.length}</p>
    </div>
  );
}
