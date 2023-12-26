// File: src/components/ApiListComponent.js

import React, { useState, useEffect } from "react";

const ApiListComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/v1/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array ensures the effect runs only once (on mount)

  return (
    <div>
      <h1>API Data List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiListComponent;
