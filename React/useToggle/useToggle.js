import { useCallback, useState } from "react";

// using useCallback function we can memoize the toggle method so
// that it can be passed down to other components
export const useToggle = (items = [], index = 0) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const currentValue = items[currentIndex];

  const toggle = useCallback(() => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((index) => index + 1);
    }
  }, [items]);

  return [currentValue, toggle];
};
