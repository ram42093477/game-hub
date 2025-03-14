import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`.trim();

  return (
    <Heading marginX={10} as="h1" size="2xl">
      {heading || "All Games"}
    </Heading>
  );
};

export default GameHeading;
