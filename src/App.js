import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Footer from "./components/Footer/Footer.js"
import AboutSectionContainer from "./components/AboutSectionContainer/AboutSectionContainer.js"
import Menu from './components/Menu/Menu.js'




function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <AboutSectionContainer />
      <Footer />
    </div>
  );
}

export default App;
