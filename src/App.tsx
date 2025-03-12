import { Grid, GridItem, Stack, Spinner, Flex } from "@chakra-ui/react";
import NavBar from "./comp/NavBar";
import GameGrid from "./comp/GameGrid";
import { useState, useEffect } from "react";
import GenreList from "./comp/GenreList";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API delay (optional)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay
  }, []);

  if (isLoading) {
    return (
      <Flex height="100vh" justify="center" align="center">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* Nav: visible on all screen sizes */}
      <GridItem area="nav" p={4}>
        <NavBar />
      </GridItem>

      {/* Aside: Hidden below lg using hideBelow */}
      <Stack hideBelow="lg">
        <GridItem area="aside" p={4}>
          <GenreList />
        </GridItem>
      </Stack>

      {/* Main: visible on all screen sizes */}
      <GridItem area="main" p={4}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
