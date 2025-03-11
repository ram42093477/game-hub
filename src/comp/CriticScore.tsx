import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const col = score > 75 ? "green" : "red";
  return <Badge colorScheme={col}>{score}</Badge>;
}

export default CriticScore;
