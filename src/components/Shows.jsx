import React, { useState, useEffect } from "react";

export default function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {shows.map((show) => (
        <div key={show.id}>
          <img src={show?.image?.medium} alt="" width="200px" />
          <br />
          <span>{show.name}</span>
        </div>
      ))}
    </div>
  );
}
