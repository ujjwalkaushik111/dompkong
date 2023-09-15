import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css"
import Aos from 'aos';
import About from './components/About';
import Partners from './components/Partners';
import TheKong from './components/TheKong';
import Faqs from './components/Faqs';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Topbutton from './components/Topbutton';
import Roadmap from './components/Roadmap';
import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css' 

function App() {
  // preloader-start
  const [loading, setLoading] =useState(true);
  // Aos-start
   
    useEffect (() => {
    Aos.init({once:true,});
    // Aos-end
   setTimeout(() => {
    setLoading(false);
    document.body.classList.remove("overflow-hidden")
  }, 3000)
  document.body.classList.add("overflow-hidden")
   }, [])

  //  preloader-end

  return (
  <>
  {loading && <Preloader/>}
    <Navbar/>
    <About/>
    <TheKong/>
    <Roadmap/>
    <Partners/>
    <Faqs/>
    <Topbutton/>
  </>
  );
}

export default App;
