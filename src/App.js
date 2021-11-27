
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Clients from './components/Clients/Clients';
import Pricing from './components/Pricing/Pricing';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path = "/" element = { <Home/> } />
      <Route path = "/home" element = { <Home/> } />
      <Route path = "/features" element = { <Features/> } />
      <Route path = "/portfolio" element = { <Portfolio/>} />
      <Route path = "/resume" element = { <Resume/>} />
      <Route path = "/clients" element = { <Clients/>} />
      <Route path = "/pricing" element = { <Pricing/>} />
      <Route path = "/blog" element = { <Blog/> } />
      <Route path = "/contact" element = { <Contact/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
