import "./styles.css";
import { useState } from "react";
import useDebounce from "./useDebounce";

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
