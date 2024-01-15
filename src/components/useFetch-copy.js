
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [inicialData, setInicialData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong here! Try later...');
        }
        const data = await response.json();

        setInicialData(data);

      } catch (error) {
        setError(String(error.message));
      } finally {
        if (!error) {
          setIsLoading(false);
        }
      }
    }
    fetchData();
  }, [url, error]);

  return { inicialData, error, isLoading };
};

export default useFetch;