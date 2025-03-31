import { React } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './Components/Session Events/Events';


function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="events" element={<Events />} />
      </Routes>
    </Router>
    {/* <Events /> */}
    </>
  )
}

export default App
