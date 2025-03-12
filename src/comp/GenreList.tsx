import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  onSelectGenre: (gen: Genres) => void;
  selectedGenre: Genres | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenres();

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
            <Button
              onClick={() => onSelectGenre(gen)}
              fontSize="lg"
              fontWeight={selectedGenre?.id === gen.id ? "bold" : "normal"}
            >
              {gen.name} {/* ✅ Make sure this is visible */}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
