import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoveLanguage from "./Articles/LoveLanguage";
import ScreenShotMac from "./Articles/ScreenShotMac";
import AlcatrazEscape from "./Articles/AlcatrazEscape";
// import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lovelanguage" element={<LoveLanguage />} />
        <Route path="/screenshotmac" element={<ScreenShotMac />} />
        <Route path="/alcatrazescape" element={<AlcatrazEscape />} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
