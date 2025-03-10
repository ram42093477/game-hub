import { useState, useEffect } from "react";
export interface Platform {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface Game {
    id: number;
    name: string;
    bimage: string;
    pplat: { platform: Platform }[]; // ✅ This matches `PlatFormIconList` prop
  }
  
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const API_URL = "http://localhost:3872/games"; // ✅ Corrected API URL

  useEffect(() => {
    const controller = new AbortController();

    fetch(API_URL, { signal: controller.signal }) // ✅ Correctly passing signal
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setGames(data || [])) // Ensure an array
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      });

    return () => controller.abort(); // ✅ Correct cleanup
  }, []);

  return { games, error };
};

export default useGames;
