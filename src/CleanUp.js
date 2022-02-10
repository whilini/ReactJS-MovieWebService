import { useState, useEffect } from "react";

const Hello = () => {
  // const byFn = () => {
  //   console.log("bye :(");
  // };
  // const hiFn = () => {
  //   console.log("created! :)");
  //   return byFn;
  // };
  // useEffect(hiFn, []);

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>hello</h1>;
};

const CleanUp = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};
export default CleanUp;
