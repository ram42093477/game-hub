import { Grid, GridItem, Spinner, Flex } from "@chakra-ui/react";
import NavBar from "./comp/NavBar";
import GameGrid from "./comp/GameGrid";
import { useState, useEffect } from "react";
import GenreList from "./comp/GenreList";
import PlatformSelector from "./comp/platformSelector";
import { Genres } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
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
      <GridItem area="nav" p={4}>
        <NavBar />
      </GridItem>

      <GridItem area="aside" p={4} display={{ base: "none", lg: "block" }}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) =>
            setGameQuery((prev) => ({ ...prev, genre }))
          }
        />
      </GridItem>

      <GridItem area="main" p={4}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery((prev) => ({ ...prev, platform }))
          }
        />
        <GameGrid gameQuery={gameQuery} /> {/* ✅ Fixed prop */}
      </GridItem>
    </Grid>
  );
}

export default App;
