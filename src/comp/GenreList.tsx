import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data = [], error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
