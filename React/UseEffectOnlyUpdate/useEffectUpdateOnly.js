
import { useEffect, useRef } from "react";

const useEffectUpdateOnly = (func) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      func();
    }
  });
};

export default useEffectUpdateOnly;
