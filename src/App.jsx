import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About  from './components/about/About';
import Services from './components/services/Services.jsx';
import Resume from './components/resume/Resume.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Testimonials from './components/testimonials/Testimonials';
const App = () => {
  return (
    <>
      <Sidebar />
      <Home/>
      <About/>
      <Services/>
      <Resume />
      <Portfolio/>
      <Pricing/>
      <Testimonials/>
      <Blog/>
      <Contact/>

    </>
  )
}

export default App
