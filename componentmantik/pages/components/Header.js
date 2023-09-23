export default function TaskCreate(params) {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "100%",
        fontSize: "20px",
      }}
    >
      <h3>Header</h3>
      <p>{params.systemUsers.length}</p>
    </div>
  );
}
