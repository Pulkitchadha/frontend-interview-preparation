import { useState } from "react";
import "./styles.css";
import useEffectUpdateOnly from "./useEffectUpdateOnly";

export default function App() {
  const [, setCount] = useState(0);

  useEffectUpdateOnly(() => {
    console.log("updated");
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCount((count) => count + 1)}>Click Me.</button>
    </div>
  );
}
