import { useEffect, useState } from "react";

/**
 * A hook that returns a boolean value indicating whether the component is mounted.
 *
 * @return {boolean} Returns true if the component is mounted, otherwise false.
 */

export const useMount = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
