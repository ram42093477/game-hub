import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {/* Nav: visible on all screen sizes */}
      <GridItem area="nav" bgColor="coral" p={4}>
        Nav
      </GridItem>

      {/* Aside: Hidden below lg using hideBelow */}
      <Stack hideBelow="lg">
        <GridItem area="aside" bgColor="gold" p={4}>
          Aside
        </GridItem>
      </Stack>

      {/* Main: visible on all screen sizes */}
      <GridItem area="main" bgColor="dodgerblue" p={4}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
