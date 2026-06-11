import React, { useState, useMemo, useCallback } from "react";
import TableRow from "./TableRow";

export default function DataTable({ rawData, onDeleteRow }) {
  const [sortField, setSortField] = useState("name");
  const [filterText, setFilterText] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());

  const processedData = useMemo(() => {
    return rawData
      .filter((row) =>
        row.name.toLowerCase().includes(filterText.toLowerCase()),
      )
      .sort((a, b) => {
        if (typeof a[sortField] === "number") {
          return a[sortField] - b[sortField];
        }
        return a[sortField].localeCompare(b[sortField]);
      });
  }, [rawData, filterText, sortField]);

  const handleRowSelect = useCallback((id) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      console.log(next);

      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter by name..."
          style={{
            padding: "8px",
            width: "60%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          style={{
            padding: "8px",
            width: "40%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="name">Sort by Name</option>
          <option value="value">Sort by Value</option>
        </select>
      </div>

      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px" }}>Select</th>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Value</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {processedData.length > 0 ? (
            processedData.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                isSelected={selectedRows.has(row.id)}
                onSelect={handleRowSelect}
                onDelete={onDeleteRow}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                style={{ textAlign: "center", padding: "20px", color: "#888" }}
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
