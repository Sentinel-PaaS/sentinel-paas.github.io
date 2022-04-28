import { useEffect } from "react";
import handleScroll from "./scripts/handleScroll";
import debounce from "./scripts/debounce";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import CaseStudy from "./components/CaseStudy";
import Presentation from "./components/Presentation";
import OurTeam from "./components/OurTeam";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => debounce(handleScroll, 10));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className="App bg-slate">
      <Nav />
      <Landing />
      <CaseStudy />
      <Presentation />
      <OurTeam />
    </div>
  );
}

export default App;
