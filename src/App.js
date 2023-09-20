import './App.css';
import { BrowserRouter as Router, Route , Routes}  from 'react-router-dom';
import Home from './componets/Home.jsx'
import Studio from './componets/Studio';
import NavbarComp from './componets/NavbarComp.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route path="/" exact element={<Home/>}   />
          <Route path="/studio" element={<Studio/>} />
          <Route path="/services" element={<Home/>} />
          <Route path="/contact" element={<Home/>} />
          <Route path="*" element={<Home/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
