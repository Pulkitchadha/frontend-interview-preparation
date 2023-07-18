import { useCallback, useRef } from "react";

export default function useThrottle(callback, delay) {
  const timerId = useRef(null);

  const throttle = useCallback(
    (...args) => {
      if (!timerId.current) {
        timerId.current = setTimeout(() => {
          callback.apply(this, args);
          clearTimeout(timerId.current);
          timerId.current = null;
        }, delay);
      }
    },
    [callback, delay]
  );

  return throttle;
}
