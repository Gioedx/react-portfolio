import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename ="React-porfolio" >
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/React-porfolio/" element={<Home />} />
          <Route path="/React-porfolio/about" element={<About />} />
          <Route path="/React-porfolio/blog" element={<Blog />} />
          {/* Define a route that will have descendant routes */}
          <Route path="React-porfolio/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;