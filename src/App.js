import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MainLayout from './mainlayout/mainlayout';
import About from './components/about/About';
import List from './components/List/List';
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainLayout />}/>
          <Route path="/about" element ={<About />}/>
          <Route path="/list" element ={<List />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
