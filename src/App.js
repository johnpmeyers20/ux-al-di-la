import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Menu from './components/Menu/Menu.js'
import ImageArray from './components/ImageArray/ImageArray.js'
import About from './components/About/About.js'
import Visit from './components/Visit/Visit.js'
import Press from './components/Press/Press.js'




function App() {
  return (
    <div className="App">
      <Header />
      <Menu id="section1"/>
      <ImageArray id="section3"/>
      <Visit id="section4"/>
      <About id="section6"/>
      <Press id="section5"/>
      <Footer />
    </div>
  );
}

export default App;
