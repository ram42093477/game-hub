import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Box width="200px" borderRadius={10}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
