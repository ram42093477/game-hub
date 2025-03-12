import React,{useEffect,useState} from "react";
const useData = <T,>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    const API_URL = `http://localhost:3872/${endpoint}`; // ✅ Correct API URL
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
  
      fetch(API_URL, { signal: controller.signal })
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
          return response.json();
        })
        .then((jsonData) => {
          if (Array.isArray(jsonData)) {
            setData(jsonData); // ✅ Use data directly if it's an array
          } else if (jsonData.results) {
            setData(jsonData.results); // If API returns { results: [...] }
          } else {
            throw new Error("Unexpected API response format");
          }
        })
        .catch((err) => {
          if (err.name !== "AbortError") setError(err.message);
        })
        .finally(() => setLoading(false));
  
      return () => controller.abort();
    }, [endpoint]);
  
    return { data, error, isLoading };
  };
  export default useData;
  