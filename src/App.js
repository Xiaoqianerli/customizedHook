import { useState } from "react";
import "./styles.css";
import { usegetIndex } from "./tools";

export default function App() {
  const [index, steIndex] = useState(0);
  const index2 = usegetIndex(index);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div onClick={() => steIndex(index2 + 1)}>click</div>
      <h1>{index2}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
