import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p>
      lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliqu sapiente so et ea commodo consequ velit vel met else tempus.
    </p>
    <img src = {image} alt = "I made this"></img>
  </div>;
}

export default About;