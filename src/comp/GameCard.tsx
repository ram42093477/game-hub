import React from "react";
import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={game.bimage} alt={game.name} />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        {/* ✅ Pass `game.pplat` directly */}
        <PlatFormIconList platforms={game.pplat} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
