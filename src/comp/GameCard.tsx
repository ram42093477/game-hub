import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const parentPlatforms = game.parent_platforms ?? [];

  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image || "fallback-image-url")}
        alt={game.name}
      />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIconList parent_platforms={parentPlatforms} />
          <CriticScore score={game.metacritic ?? 0} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
