import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import AboutSectionContainer from './components/AboutSectionContainer/AboutSectionContainer.js'
import Menu from './components/Menu/Menu.js'
import ImageArray from './components/ImageArray/ImageArray.js'
import Press from './components/Press/Press.js'


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <ImageArray />
      <AboutSectionContainer />
      <Press />
      <Footer />
    </div>
  );
}

export default App;
