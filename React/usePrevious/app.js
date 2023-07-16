import "./styles.css";
import { useState } from "react";
import usePrevious from "./usePrevious";

export default function App() {
  const [count, setCount] = useState(0);
  const prevValue = usePrevious(count);
  return (
    <div className="App">
      <span>Previous Value : {prevValue} </span>
      <button onClick={() => setCount((count) => count + 1)}>
        Current: {count}{" "}
      </button>
    </div>
  );
}
