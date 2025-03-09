import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import NavBar from "./comp/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {/* Nav: visible on all screen sizes */}
      <GridItem area="nav" p={4}>
        <NavBar></NavBar>
      </GridItem>

      {/* Aside: Hidden below lg using hideBelow */}
      <Stack hideBelow="lg">
        <GridItem area="aside" p={4}>
          Aside
        </GridItem>
      </Stack>

      {/* Main: visible on all screen sizes */}
      <GridItem area="main" p={4}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
