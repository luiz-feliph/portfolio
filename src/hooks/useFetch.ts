import { useEffect, useState } from "react";
import type { UserData } from "../types/UserData";

const useFetch = (url: string): UserData | null => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result: { public_repos: number } = await response.json();
        const currentYear = new Date().getFullYear();

        setData({
          publicRepos: result.public_repos,
          years: currentYear - 2025,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [url]);

  return data;
};

export default useFetch;
