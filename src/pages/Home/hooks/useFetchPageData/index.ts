// libs
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// actions, apis
import { getRepos } from "@/apis/repo/getRepos";

export default function useFetchPageData() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([dispatch(getRepos({}))]).finally(() => {
      setLoading(false);
    });
  }, []);

  return { isLoading };
}
