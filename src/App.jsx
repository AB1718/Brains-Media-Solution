// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <AboutUs />
        {/* <Slider /> */}
        <Mission />
        <Vision />
        <Services />
      </main>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
