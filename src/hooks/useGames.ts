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
}

const useGames = (selectedGenre: Genres | null, selectedPlatform: Platform | null) => {
  const { data = [], error, isLoading } = useData<Game>("games");

  console.log("Fetched games:", data);
  console.log("Selected genre:", selectedGenre);
  console.log("Selected platform:", selectedPlatform);

  const filteredGames = data.filter((game) => {
    const matchesGenre = selectedGenre ? game.genre_ids?.includes(selectedGenre.id) : true;
    const matchesPlatform = selectedPlatform
      ? game.parent_platforms.some((p) => p.platform.id === selectedPlatform.id)
      : true;

    return matchesGenre && matchesPlatform;
  });

  return { data: filteredGames, error, isLoading };
};

export default useGames;
