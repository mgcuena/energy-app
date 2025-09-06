import React, { useEffect, useState } from "react";

export function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div>
      <h1>Items from Backend</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}
