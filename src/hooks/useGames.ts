import useData from "./useData";
import { Genres } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genre_ids: number[];
  released_date?: string;
  added_date?: string;
  rating?: number;
}

// ✅ Accepts `gameQuery` to handle sorting and filtering
const useGames = (gameQuery: { genre: Genres | null; platform: Platform | null; sortOrder: string }) => {
  const { data = [], error, isLoading } = useData<Game>("games");

  console.log("Fetched games:", data);
  console.log("Selected genre:", gameQuery.genre);
  console.log("Selected platform:", gameQuery.platform);
  console.log("Selected sort order:", gameQuery.sortOrder);

  // ✅ Filtering by genre & platform
  let filteredGames = data.filter((game) => {
    const matchesGenre = gameQuery.genre ? game.genre_ids?.includes(gameQuery.genre.id) : true;
    const matchesPlatform = gameQuery.platform
      ? game.parent_platforms.some((p) => p.platform.id === gameQuery.platform?.id) // ✅ Safe null check
      : true;

    return matchesGenre && matchesPlatform;
  });

  // ✅ Sorting Logic
  if (gameQuery.sortOrder) {
    filteredGames = [...filteredGames].sort((a, b) => {
      switch (gameQuery.sortOrder) {
        case "-added":
          return (new Date(b.added_date || 0).getTime()) - (new Date(a.added_date || 0).getTime());
        case "-released":
          return (new Date(b.released_date || 0).getTime()) - (new Date(a.released_date || 0).getTime());
        case "-metacritic":
          return (b.metacritic ?? 0) - (a.metacritic ?? 0);
        case "-rating":
          return (b.rating ?? 0) - (a.rating ?? 0);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0; // No sorting
      }
    });
  }

  return { data: filteredGames, error, isLoading };
};

export default useGames;
