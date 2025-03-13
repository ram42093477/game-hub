import { useEffect, useState } from "react";

const useData = <T,>(endpoint: string, requestConfig: RequestInit = {}, deps: any[] = []) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const API_URL = `http://localhost:3872/${endpoint}`;

  useEffect(() => {
    console.log("Fetching from:", API_URL);

    const controller = new AbortController();
    setLoading(true);

    fetch(API_URL, { ...requestConfig, signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
      })
      .then((jsonData) => {
        console.log("Fetched Data:", jsonData);
        setData(Array.isArray(jsonData) ? jsonData : jsonData.results || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [endpoint, JSON.stringify(requestConfig), ...deps]);

  return { data, error, isLoading };
};

export default useData;
