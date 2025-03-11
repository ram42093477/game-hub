import React from "react";
import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.bimage)} alt={game.name} />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        {/* ✅ Pass `game.pplat` directly */}
        <HStack justifyContent="space-between">
          <PlatFormIconList platforms={game.pplat} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
