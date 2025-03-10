import React, { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5332/games") // Fetch directly from JSON server
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Debugging
        setGames(data || []); // Ensure it's an array
      })
      .catch((err) => {
        console.error("API Error:", err); // Debugging
        setError(err.message);
      });
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {error && <p>error</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.id} - {game.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
