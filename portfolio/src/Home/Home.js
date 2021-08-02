import React from "react";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/about_me");
  };

  return (
    <div className="Home">
      <h1>Do you want to meet your next Full-Stack developer?</h1>
      <button onClick={handleClick}>Sure</button>
    </div>
  );
}
