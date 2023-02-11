import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Work/>
      <Timeline/>
      <Services/>
      {/* <Testimonial/> */}
      <About/>
      <Contact/>
      <Toaster/>
      <Footer/>
    </>
  );
}

export default App;
