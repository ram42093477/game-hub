import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";

function GenreList() {
  const { data, error, isLoading } = useGenres(); // ✅ Correct destructuring

  if (isLoading) return <p>Loading genres...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <List>
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY={5}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(gen.image_background)}
            />
            <Text fontSize="lg">{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
