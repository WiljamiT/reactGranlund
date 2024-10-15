import { useState } from "react";

const useErrorHandler = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = (message: string) => {
    setError(message);
  };

  const clearError = () => {
    setError(null);
  };

  return { error, handleError, clearError };
};

export default useErrorHandler;
