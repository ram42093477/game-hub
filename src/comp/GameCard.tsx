import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  game: Game;
}

const emojiList = ["🎮", "🔥", "⭐", "⚔️", "🏎️", "👾", "🕹️", "🚀", "💣", "🎯"];

function GameCard({ game }: Props) {
  const parentPlatforms = game.parent_platforms ?? [];

  // ✅ Pick a random emoji for each card
  const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];

  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image || "fallback-image-url")}
        alt={game.name}
      />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        <VStack align="start" spacing={1}>
          <PlatFormIconList parent_platforms={parentPlatforms} />
          <Text fontSize="xl">{randomEmoji}</Text>{" "}
          {/* ✅ Different emoji for every card */}
        </VStack>
        <HStack justifyContent="space-between">
          <CriticScore score={game.metacritic ?? 0} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
