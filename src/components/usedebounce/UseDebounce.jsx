import { useEffect, useState } from "react";

const UseDebounce = (value, delay) => {
  const [debounceTerm, setDebounceTerm] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceTerm(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceTerm;
};

export default UseDebounce;
