import logo from './logo.svg';
import './App.css';
import ItemComponent from './components/ItemComponent';
import PriceContainer from './components/PriceContainer';
import Inventory from './components/Inventory';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        {/* Login Screen */}
        <Route exact path='/' element = {<Home />}/>

        
        {/* Credit card */}
        
      {/*<Route path="/payment" element = {<Payment/> } /> */}


        {/* Inventory */}
        <Route path="/inventory" element = {<Inventory/> } />

        
        {/* Camera */}
        {/*<Route path="/camera" element = {<Camera/> } />
*/}
        {/* Error page for all remaining routes */}
   
      {/*     <Route path='*' element={<ErrorPage/>} /> */}

      </Routes>

    </Router>
      
  );
}

export default App;
