import React, { useState, useCallback } from "react";
import DataTable from "./components/DataTable";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Ali Raza", value: 150 },
    { id: 2, name: "Fatima Noor", value: 210 },
    { id: 3, name: "Usman Tariq", value: 95 },
    { id: 4, name: "Zainab Abbas", value: 300 },
    { id: 5, name: "Muhammad Anas", value: 120 },
    { id: 6, name: "Ayesha Khan", value: 280 },
    { id: 7, name: "Hassan Ali", value: 165 },
    { id: 8, name: "Shaukat Sohail", value: 170 },
  ]);

  const handleDeleteRow = useCallback((id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        React Optimized Data Table
      </h1>
      <p style={{ textAlign: "center", color: "#666" }}>
        Features: Sorting, Filtering, Selection & Row Deletion
      </p>
      <hr
        style={{
          border: "0",
          height: "1px",
          background: "#ccc",
          margin: "20px 0",
        }}
      />
      <DataTable rawData={data} onDeleteRow={handleDeleteRow} />
    </div>
  );
}
