import { useState } from "react";

type Status = "idle" | "loading" | "error" | "success";

interface PostHookResult<T> {
  postData: (data: any) => Promise<void>;
  response: T | null;
  status: Status;
  error: string | null;
}

const usePost = <T,>(url: string): PostHookResult<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const postData = async (data: any) => {
    setStatus("loading");
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      const jsonData = await result.json();
      setResponse(jsonData);
      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setError(error.message || "An error occurred");
      console.error("Error posting data:", error);
    }
  };

  return { postData, response, status, error };
};

export default usePost;
