import React, { useEffect, useState } from "react";
import useGames from "../hooks/UseGames";
const API_URL = "http://localhost:3872/games"; // ✅ Corrected API URL

function GameGrid() {
  const { error, games } = useGames();
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          {game.id} - {game.name}
        </li>
      ))}
    </ul>
  );
}

export default GameGrid;
