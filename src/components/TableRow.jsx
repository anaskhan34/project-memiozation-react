import React from "react";

const TableRow = React.memo(function TableRow({
  row,
  isSelected,
  onSelect,
  onDelete,
}) {
  return (
    <tr
      style={{
        background: isSelected ? "#e0f0ff" : "white",
        borderBottom: "1px solid #ccc",
      }}
    >
      <td style={{ padding: "10px" }}>
        <input
          type="checkbox"
          onChange={() => onSelect(row.id)}
          checked={isSelected}
        />
      </td>
      <td style={{ padding: "10px" }}>{row.name}</td>
      <td style={{ padding: "10px" }}>{row.value}</td>
      <td style={{ padding: "10px" }}>
        <button
          onClick={() => onDelete(row.id)}
          style={{
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
});

export default TableRow;
