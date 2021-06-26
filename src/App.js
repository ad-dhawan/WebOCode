import './App.css';

import Home from './Screens/Home/Home'
import Stats from './Screens/Stats/Stats'
import News from './Screens/News/News'
import Symptoms from './Screens/Symptoms/Symptoms'
import Navbar from './Components/Navbar/Navbar'
// import Scroll from './ScrollToTop/scrollToTop';

function App() {
  return (
    <>
      {/* <Scroll /> */}
      <Navbar class="nav" />
      <Home id="home" />
      <Stats id="stats" />
      <News id="news" />
      <Symptoms id="symptoms" />
    </>
  );
}

export default App;
