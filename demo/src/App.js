import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

import Header from './Header';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <h1>By Mayank</h1>
      <BrowserRouter>

      <ul className = "nav">
        <li className = "link"> <Link to = "/home">Home</Link> </li>
        <li className = "link"> <Link to = "/about">About</Link> </li>
        <li className = "link"> <Link to = "/contact">Contacts</Link> </li>
        <li className = "link"> <Link to = "/Product">Products</Link> </li>
      </ul>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/contact" element = {<Contacts/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/Product" element = {<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
