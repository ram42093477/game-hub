import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data = [], error, isLoading } = useData<Genres>("genres");

  console.log("Fetched genres:", data); // ✅ Debug API response
  console.log("Loading status:", isLoading);
  console.log("Error:", error);

  return { data, error, isLoading };
};

export default useGenres;

