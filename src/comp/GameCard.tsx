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
  // ✅ Extract platforms safely
  const parentPlatforms = game.parent_platforms ?? [];

  return (
    <Card>
      {/* ✅ Ensure correct image field is used */}
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        <HStack justifyContent="space-between">
          {/* ✅ Pass `parent_platforms` correctly */}
          <PlatFormIconList parent_platforms={parentPlatforms} />
          {/* ✅ Ensure metacritic score has a fallback */}
          <CriticScore score={game.metacritic ?? 0} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
