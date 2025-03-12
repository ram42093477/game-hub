import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  bimage: string;
  pplat: { platform: Platform }[];
  metacritic: number;
  genre_ids: number[]; // ✅ Ensure genre IDs are included
}

const useGames = (selectedGenre: Genres | null) => {
  const { data, error, isLoading } = useData<Game>("games"); // ✅ Get all games first

  // ✅ Filter games based on selectedGenre
  const filteredGames = selectedGenre
    ? data.filter((game) => game.genre_ids.includes(selectedGenre.id))
    : data; // If no genre selected, show all games

  return { data: filteredGames, error, isLoading };
};

export default useGames;
