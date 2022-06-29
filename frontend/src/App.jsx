import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import Home from './pages/Home';
import Navigation from './components/layouts/Navigation';

const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AboutPage = () => (
  <Suspense
    fallback={
      <div>
        <p>Loading profile...</p>
      </div>
    }
  >
    <About />
  </Suspense>
);

const NotFoundPage = () => (
  <Suspense
    fallback={
      <div>
        <p>Loading profile...</p>
      </div>
    }
  >
    <NotFound />
  </Suspense>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
