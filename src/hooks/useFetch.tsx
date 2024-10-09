import { useState, useEffect } from "react";

type Status = "idle" | "loading" | "error" | "success";

export interface LocationData {
  id: number;
  locationName: string;
  address: string;
  latitude: number;
  longitude: number;
  url: string;
}

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setStatus("success");
      } catch (error: any) {
        setStatus("error");
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data, status, error };
};

export default useFetch;
