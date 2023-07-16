import "./styles.css";
import { useToggle } from "./useToggle";

export default function App() {
  const [currentValue, toggle] = useToggle(["a", "b", "c", "d", "e"], 2);
  return (
    <div className="App">
      <span>Current: {currentValue} </span>
      <button onClick={toggle}>Current: {currentValue} </button>
    </div>
  );
}
