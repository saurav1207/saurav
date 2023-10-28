import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Layout contentComponent={<Home />} />}
          />
          <Route
            path="/about"
            element={<Layout contentComponent={<About />} />}
          />
          <Route
            path="/services"
            element={<Layout contentComponent={<Service />} />}
          />
          <Route
            path="/portfolio"
            element={<Layout contentComponent={<Portfolio />} />}
          />
          <Route
            path="/contact"
            element={<Layout contentComponent={<Contact />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
