import React, { useState } from 'react';
import './App.css';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Appraisal from './components/Appraisal/Appraisal';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="App">
      {!loadingComplete && (
        <LoadingAnimation onLoadingComplete={() => setLoadingComplete(true)} />
      )}
      
      <Header />
      
      <main>
        <div className="container">
          <div className="content-area">
            <Home />
            <About />
            <Services />
            <Projects />
            <Appraisal />
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
}

export default App;