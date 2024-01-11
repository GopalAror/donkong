import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import black from "./assets/image/black-monkey.webp";
import white from "./assets/image/white-monkey.webp";
import big from "./assets/image/big-monkey.webp";
import About from './components/About';
import Utilities from './components/Utilities';
import Kong from './components/Kong';
import Mint from './components/Mint';
import Slider from './components/Slider';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Faq from './components/Faq';
import BackToTop from './components/BackToTop';
import Preload from './components/Preload';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [PreLoader, setPreLoader] = useState(false)
  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 3000)
  }, [])
  function reportWindowSize() {
    document.title = (`Donkong(${window.innerWidth},${window.innerHeight})`)
  }
  window.onresize = reportWindowSize;
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, [])
  return (
    <div>
      {PreLoader ? (<div> <Preload /> </div>) :
        (<div className="bg-[#0A0A0A] overflow-x-hidden">
          <div className='bg-[url(./assets/image/heroSecbg.webp)] 2xl:h-screen h-[810px] bg-bg-center sm:bg-100% bg-no-repeat relative'>
            <Nav />
            <Header />
            <div className="flex items-center">
              <img className=' absolute min-[400px]:block hidden right-[25%] sm:right-[50%] md:right-[40%] 2xl:right-[25%] xl:right-[29%] bottom-0 max-h-[410px] max-w-[405px] z-0 animate-jump' src={black} alt="black" />
              <img className=' absolute hidden sm:block right-[12%] 2xl:right-[8%] bottom-0 max-h-[510px] max-w-[417px] z-0 animate-jump animate-delay-second' src={white} alt="white" />
              <img className=' absolute right-0 bottom-0 max-h-[635px] max-w-[641px] z-0 animate-jump animate-delay' src={big} alt="big" />
            </div>
          </div>
          <About />
          <Utilities />
          <Kong />
          <Mint />
          <Roadmap />
          <Slider />
          <Team />
          <Faq />
          <BackToTop />
        </div>)}
    </div>
  );
}
export default App;