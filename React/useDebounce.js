import "./styles.css";
import { useState, useRef, useCallback } from "react";

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

export default function App() {
  const [text, setText] = useState("");
  const fetchData = (value) => {
    console.log("Fetch", value);
  };

  const onDebouncedFetch = useDebounce(fetchData, 300);

  const onSearch = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    onDebouncedFetch(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        placeholder="Search here"
        onChange={onSearch}
      />
    </div>
  );
}
