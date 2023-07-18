import "./styles.css";
import useThrottle from "./useThrottle";

export default function App() {
  const makeApiCall = () => {
    console.log("called");
  };
  const throttleClick = useThrottle(makeApiCall, 2000);
  return (
    <div className="App">
      <button className="main-btn" onClick={throttleClick}>
        Click
      </button>
    </div>
  );
}
