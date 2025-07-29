import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!


import user from "../data/user";
console.log(user);

function App() {

  return (
    <div>
      <NavBar />
      <Home {...user} />
      <About  bio={user.bio}              // Pass bio as a prop
        github={user.links.github}  // Pass github link as a prop
        linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
