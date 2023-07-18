import "./styles.css";
import { useRef, useCallback } from "react";

function useDebounce(fn, delay) {
  let timerId = useRef(null);

  const debounce = useCallback(
    function (...args) {
      let context = this;
      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = setTimeout(() => fn.apply(context, args), delay);
    },
    [fn, delay]
  );

  return debounce;
}
