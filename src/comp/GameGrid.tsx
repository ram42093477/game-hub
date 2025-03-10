import React, { useEffect, useState } from "react";
import useGames from "../hooks/UseGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
const API_URL = "http://localhost:3872/games"; // ✅ Corrected API URL

function GameGrid() {
  const { error, games } = useGames();
  if (error) return <p>Error: {error}</p>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={10}
      padding={10}
      borderRadius={10}
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
