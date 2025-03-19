import { UserType } from "@/types/user";
import { useEffect, useState } from "react";

const fetchSingleUser = (userId: string) => {
  return fetch(`/api/user/${userId}`);
};

const useGetUser = (userId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchSingleUser(userId)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || `HTTP error! Status: ${res.status}`);
        }
        return data;
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [userId]);

  return { user, loading, error };
};

export default useGetUser;
