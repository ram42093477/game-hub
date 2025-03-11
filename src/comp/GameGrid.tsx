import React, { useEffect, useState } from "react";
import useGames from "../hooks/UseGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
const API_URL = "http://localhost:3872/games"; // ✅ Corrected API URL
function GameGrid() {
  const { error, games, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]); // ✅ Logs every time `isLoading` changes
  if (error) return <p>Error: {error}</p>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={10}
      padding={10}
      borderRadius={10}
    >
      {isLoading &&
        Skeletons.map((sk) => (
          <GameCardContainer>
            <GameSkeleton key={sk} />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
