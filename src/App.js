import React from 'react';

// import components
import Header from './Components/Header';
import Hero from './Components/Hero';
import Brands from './Components/Brands';
import About from './Components/About';
import Skill from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';

const App = () => {
  return <div>
          <Header />
          <Hero />
          <Brands />
          <About />
          <Skill />
          <Portfolio />
          <Services />
          {/* <div style={{height:"2000px"}}></div> */}
  </div>;
};

export default App;
