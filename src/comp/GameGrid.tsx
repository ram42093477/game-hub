import React from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  // Debugging logs (check console)
  console.log("Selected Genre:", selectedGenre);
  console.log("Selected Platform:", selectedPlatform);
  console.log("Fetched Games:", data);

  if (error)
    return (
      <Text color="red.500">Error: {error || "Something went wrong"}</Text>
    );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={10}
    >
      {isLoading &&
        Skeletons.map((sk) => (
          <GameCardContainer key={sk}>
            <GameSkeleton />
          </GameCardContainer>
        ))}

      {data?.length === 0 && !isLoading && (
        <Text>No games found for this genre or platform.</Text>
      )}

      {data?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
