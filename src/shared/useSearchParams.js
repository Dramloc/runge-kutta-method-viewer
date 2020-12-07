import qs from "qs";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useSearchParams = () => {
  const location = useLocation();
  const searchParams = useMemo(() => {
    return qs.parse(location.search.substring(1));
  }, [location.search]);
  return searchParams;
};
