import "./App.css";

import Home from "./Screens/Home/Home";
import Stats from "./Screens/Stats/Stats";
import News from "./Screens/News/Info";
import Symptoms from "./Screens/Symptoms/Symptoms";
import Vaccine from "./Screens/Vaccine/Vaccine";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar class="nav" />
      <Home id="home" />
      <Stats id="stats" />
      <News id="news" />
      <Symptoms id="symptoms" />
      <Vaccine id="vaccine" />
      <div>
        <p>Made with ❤️ by Team RDA</p>
      </div>
    </>
  );
}

export default App;
