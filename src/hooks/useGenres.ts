import React, { useEffect, useState } from "react";

interface Genres {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const API_URL = "http://localhost:3872/genres"; // Corrected API for genres

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(API_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json() as Promise<FetchGenresResponse>; // ✅ Corrected typing
      })
      .then((data) => {
        setGenres(data.results || []); // ✅ Use `data.results`
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
