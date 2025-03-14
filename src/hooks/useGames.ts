import useData from "./useData";
import { GameQuery } from "../App"; // Ensure this import is present
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic?: number;
  genre_ids: number[];
  released_date?: string;
  added_date?: string;
  rating?: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data = [], error, isLoading } = useData<Game>("games");

  console.log("Fetched games:", data);
  console.log("Game Query:", gameQuery);

  let filteredGames = data.filter((game) => {
    const matchesGenre = gameQuery.genre ? game.genre_ids?.includes(gameQuery.genre.id) : true;
    const matchesPlatform = gameQuery.platform
      ? game.parent_platforms.some((p) => p.platform.id === gameQuery.platform?.id)
      : true;
    const matchesSearch = gameQuery.searchText
      ? game.name.toLowerCase().includes(gameQuery.searchText.toLowerCase())
      : true;

    return matchesGenre && matchesPlatform && matchesSearch;
  });

  // Sorting Logic with Better Fallbacks
  const sortFunctions: Record<string, (a: Game, b: Game) => number> = {
    "-added": (a, b) => (new Date(b.added_date ?? 0).getTime()) - (new Date(a.added_date ?? 0).getTime()),
    "-released": (a, b) => (new Date(b.released_date ?? 0).getTime()) - (new Date(a.released_date ?? 0).getTime()),
    "-metacritic": (a, b) => (b.metacritic ?? 0) - (a.metacritic ?? 0),
    "-rating": (a, b) => (b.rating ?? 0) - (a.rating ?? 0),
    "name": (a, b) => a.name.localeCompare(b.name),
  };

  if (gameQuery.sortOrder && sortFunctions[gameQuery.sortOrder]) {
    filteredGames = [...filteredGames].sort(sortFunctions[gameQuery.sortOrder]);
  }

  return { data: filteredGames, error, isLoading };
};

export default useGames;
