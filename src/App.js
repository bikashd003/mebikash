import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import ErrorBoundary from './ErrorBoundary';
import Privacy from './components/Privacy';
import CookiePolicy from './components/CookiePolicy';
import TermsAndConditions from './components/TermsAndConditions';
import projects from './projects';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './Project/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ErrorBoundary>
          <Routes>
            <Route
             exact path="/privacy-policy"
              element={<Privacy />}
            />
            <Route
              path="/cookie-policy"
              element={<CookiePolicy />}
            />
            <Route
              path="/terms-and-condition"
              element={<TermsAndConditions />}
            />
            {projects.map(({ id, title }) => (
              <Route key={id} path={`/${title}`} element={<ProjectDetails projectId={id} />} />
            ))}
            <Route
              path="/*"
              element={(
                <>
                  <Banner />
                  <About />
                  <Skills />
                  <ProjectCard />
                  <Contact />
                </>
              )}
            />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
