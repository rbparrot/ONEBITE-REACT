import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const onClickButton = (value) => {
    setCount(count + value);
  };

  const isMount = useRef(false);

  // 1. 마운트
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트
  useEffect(() => {}, [count]);

  // 의존성 배열
  // deps

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
