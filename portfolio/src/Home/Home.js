import React from "react";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/about_me");
  };

  const toProject = () => {
    history.push("/projects");
  };

  return (
    <div className="Home">
      <h1>Hello. I'm Ruaa AlSugheir</h1>
      <p>
        I am an passionate full-stack developer who loves making functional
        and visually pleasing websites.
      </p>
      <button onClick={toProject}>My projects</button>
      <button onClick={handleClick}>View professional profile</button>
    </div>
  );
}
