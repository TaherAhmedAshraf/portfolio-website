import React from "react";
import About from "./components/About";
import Facts from "./components/Facts";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Main() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Facts />
      <Service />
      {/* <Skills /> */}
      <Projects />
    </>
  );
}
