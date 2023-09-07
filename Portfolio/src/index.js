import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/landing.jsx';
import About from './components/about.jsx';
import AboutPage from './components/aboutpage.jsx';
import Service from './components/service.jsx';
import ServicePage from './components/servicepage.jsx';
import PortfolioPage from './components/portfoliopage.jsx';
import Contact from './components/contact.jsx';
import ContactPage from './components/contactpage.jsx';
import Footer from './components/footer.jsx';
import Navigation from './components/Navigation.js';
import Service1 from './components/services/service1.jsx';
import Service2 from './components/services/service2.jsx';
import Service3 from './components/services/service3.jsx';
import Service4 from './components/services/service4.jsx';
import Service5 from './components/services/service5.jsx';
import Service6 from './components/services/service6.jsx';
import Service7 from './components/services/service7.jsx';
import Service8 from './components/services/service8.jsx';
import Service9 from './components/services/service9.jsx';
import Service10 from './components/services/service10.jsx';
import Service11 from './components/services/service11.jsx';
import Service12 from './components/services/service12.jsx';
import Service13 from './components/services/service13.jsx';
import Service14 from './components/services/service14.jsx';
import carousel from "./components/carousel.jsx";

import MainSection5 from './components/main-section5.jsx';
import Thankyou from './components/thankyou.js';
import Testimonials from './components/testimonials.jsx';
import Mid1 from './components/mid-section1.jsx';
import Process from './components/process.jsx';
import Carousel from "./components/carousel.jsx";


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

//this is the links to other pages
ReactDOM.render(

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<>
  		<Landing />
      <Carousel />
  		<About />
      <Mid1/>
      <Service />
      <Contact />
  		</>} />
      <Route path="/about" element={<About />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/ServicePage" element={<>
  		<ServicePage />
  		<Service1 href="service1" style={{backgroundColor : 'red'}}/>
  		<Service2/>
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
      <Service7 />
      <Service8 />
      <Service9 />
      <Service10 />
      <Service11 />
      <Service12 />
      <Service13 />
      <Service14 />

  		</>} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/servicepage" element={<ServicePage />} />
      <Route path="/portfoliopage" element={<PortfolioPage />} />
      <Route path="/thankyou" element={<Thankyou />} />
 
      <Route path="/services/Service1" element={<Service1 />} />
      <Route path="/services/Service2" element={<Service2 />} />
      <Route path="/services/Service3" element={<Service3 />} />
      <Route path="/services/Service4" element={<Service4 />} />
      <Route path="/services/Service5" element={<Service5 />} />
      <Route path="/services/Service6" element={<Service6 />} />
      <Route path="/services/Service7" element={<Service7 />} />
      <Route path="/services/Service8" element={<Service8 />} />
      <Route path="/services/Service9" element={<Service9 />} />
      <Route path="/services/Service10" element={<Service10 />} />
      <Route path="/services/Service11" element={<Service11 />} />
      <Route path="/services/Service12" element={<Service12 />} />
      <Route path="/services/Service13" element={<Service13 />} />
      <Route path="/services/Service14" element={<Service14 />} />

    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
