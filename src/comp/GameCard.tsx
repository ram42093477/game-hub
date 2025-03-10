import React from "react";
import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={game.bimage}></Image>
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
