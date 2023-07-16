import { useEffect, useRef } from "react";

export default function usePrevious(value) {
  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
}
