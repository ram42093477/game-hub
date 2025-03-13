import React from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App"; // ✅ Import GameQuery type

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { genre, platform } = gameQuery; // ✅ Extract genre and platform
  const { error, data, isLoading } = useGames(genre, platform); // ✅ Pass them separately

  const Skeletons = [1, 2, 3, 4, 5, 6];

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
