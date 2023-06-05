import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoveLanguage from "./Articles/LoveLanguage";
import ScreenShotMac from "./Articles/ScreenShotMac";
import AlcatrazEscape from "./Articles/AlcatrazEscape";
import LoseWeightFast from "./Articles/LoseWeightFast";
import SkyBlue from "./Articles/SkyBlue";
import CryptoCurrency from "./Articles/CryptoCurrency";
import IntermittentFasting from "./Articles/IntermittentFasting";
import ChatGpt from "./Articles/ChatGpt";
// import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chatgpt" element={<ChatGpt />} />
        <Route path="/lovelanguage" element={<LoveLanguage />} />
        <Route path="/screenshotmac" element={<ScreenShotMac />} />
        <Route path="/alcatrazescape" element={<AlcatrazEscape />} />
        <Route path="/loseweightfast" element={<LoseWeightFast />} />
        <Route path="/skyblue" element={<SkyBlue />} />
        <Route path="/cryptocurrency" element={<CryptoCurrency />} />
        <Route path="/intermittentfasting" element={<IntermittentFasting />} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
