import React, { useEffect } from "react";
import useGames from "../hooks/UseGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";
interface Props {
  selectedGenre: Genres | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]);

  if (error) return <p>Error: {error}</p>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={3}
      padding={10}
      borderRadius={10}
    >
      {isLoading &&
        Skeletons.map((sk) => (
          <GameCardContainer key={sk}>
            <GameSkeleton />
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
