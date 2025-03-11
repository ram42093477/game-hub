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
  pplat: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const API_URL = "http://localhost:3872/games";

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(API_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setGames(data || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
