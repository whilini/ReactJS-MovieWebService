import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function UseEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEACH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when keyword or counter is change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search Here'
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click ME!</button>
    </div>
  );
}

export default UseEffect;
