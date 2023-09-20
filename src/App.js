import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Routes}  from 'react-router-dom';
import Home from './componets/Home.jsx'
import NavbarComp from './componets/NavbarComp.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route path="/" exact element={<Home/>}   />
          <Route path="/about" element={<Home/>} />
          <Route path="/services" element={<Home/>} />
          <Route path="/contact" element={<Home/>} />
          <Route path="*" element={<Home/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
