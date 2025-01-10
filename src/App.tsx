import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages
const AboutMe = React.lazy(() => import('./pages/AboutMe'));
const Education = React.lazy(() => import('./pages/Education'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const PortfolioDetail = React.lazy(() => import('./pages/PortfolioDetail'));
const Achievements = React.lazy(() => import('./pages/Achievements'));
const Updates = React.lazy(() => import('./pages/Updates'));
const UpdateDetail = React.lazy(() => import('./pages/UpdateDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/updates/:id" element={<UpdateDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;