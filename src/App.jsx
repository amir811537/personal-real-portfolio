



import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Component/Nav";
import Banner from "./Component/Banner";
import AboutMe from "./Component/AboutMe";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
import Education from "./Component/Education";
import StarryBackground from "./Component/StarryBackground";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function App() {


  const lenis = useLenis(({ scroll }) => {
    // called every scroll and
  })




  return (
    <> <ReactLenis root>
      <div className="bg-black text-white">
        <div className="  sticky top-0 z-[999] ">
          <Nav></Nav>
          <Banner></Banner>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Projects></Projects>
          <Education></Education>
          <Footer></Footer>
        </div>
       <div className="z-[-999]">
       <StarryBackground></StarryBackground>
       </div>
      </div>

     
      { /* content */ }
    </ReactLenis>
    </>
  );
}

export default App;